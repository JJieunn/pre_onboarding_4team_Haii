const errors = require('../middleware/signup_errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const userModels = require('../models/user');
const { createError } = require('../middleware/createError');

const createUser = async (
  name,
  account,
  email,
  password,
  phoneNumber,
  region
) => {
  const emailRegExp = /^[\w\-]+\@Haii.com$/g;
  const passwordRegExp = /^[A-Za-z0-9.!?@#*+]+$/;
  const phoneNumberRegExp = /^010-\d{4}-\d{4}$/;

  const emailValueCheck = emailRegExp.test(email);
  if (!emailValueCheck) errors.emailError();

  const passwordValueCheck = passwordRegExp.test(password);
  if (!passwordValueCheck) errors.passwordError();

  const phoneNumberValueCheck = phoneNumberRegExp.test(phoneNumber);
  if (!phoneNumberValueCheck) errors.phoneNumberError();

  const [userAccount] = await userModels.getUserByAccount(account);
  const [userEmail] = await userModels.getUserByEmail(email);
  const [phoneNumberId] = await userModels.getUserIdByPhoneNumber(phoneNumber);
  if (userAccount || userEmail || phoneNumberId) errors.userExistedError();

  if (region === '대표') {
    const [representative] = await userModels.isRepresentativeExists();

    if (!representative) grade = 1;
    else if (representative) errors.representativeError(); // 대표 관리자는 1명만
  } else {
    const [regionId] = await userModels.getRegionIdByName(region); // region, 테이블에 존재하는 지역?

    if (regionId) grade = 2;
    else errors.regionError();
  }

  const salt = bcrypt.genSaltSync(11);
  const hashedPw = bcrypt.hashSync(password, salt);

  const isUserValid =
    emailValueCheck && phoneNumberValueCheck && passwordValueCheck;
  if (isUserValid)
    return await userModels.createUser(
      name,
      account,
      email,
      hashedPw,
      phoneNumber,
      grade,
      region
    );
};

const login = async (email, password) => {
  const existingUser = await userModels.readUserByEmail(email);
  const userId = existingUser.id;
  if (bcrypt.compareSync(password, existingUser.password)) {
    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });
    const userDto = {
      id: userId,
      token,
    };
    return userDto;
  } else {
    const error = createError('LOGIN_FAIL', 400);
    throw error;
  }
};

const beforeUpdateMgr = async mgrId => {
  return await userModels.beforeUpdateMgr(mgrId);
};

const updateMgr = async (token, mgrId, name, phone_number, region) => {
  const user_id = jwt.verify(token, SECRET_KEY).id;
  const check = await userModels.adminCheck(user_id);
  if (check.length > 0) {
    return await userModels.updateMgr(mgrId, name, phone_number, region);
  } else {
    const error = new Error('Admin 계정만 수정할 수 있습니다');
    error.statusCode = 400;
    throw error;
  }
};

module.exports = { createUser, login, beforeUpdateMgr, updateMgr };
