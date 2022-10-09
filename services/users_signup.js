const signUpModel = require('../models/users_signup')
const errors = require('./signup_errors')
const bcrypt = require('bcryptjs');

const createUser = async (name, account, email, password, phoneNumber, region) => {

  const emailRegExp = /^[\w\-]+\@Haii.com$/g;
  const passwordRegExp = /^[A-Za-z0-9.!?@#*+]+$/;
  const phoneNumberRegExp = /^010-\d{4}-\d{4}$/;
  
  const emailValueCheck = emailRegExp.test(email)
  if(!emailValueCheck) errors.emailError()
  

  const passwordValueCheck = passwordRegExp.test(password)
  if(!passwordValueCheck) errors.passwordError()
  

  const phoneNumberValueCheck = phoneNumberRegExp.test(phoneNumber)
  if(!phoneNumberValueCheck) errors.phoneNumberError()
  
  const [userAccount] = await signUpModel.getUserByAccount(account);
  const [userEmail] = await signUpModel.getUserByEmail(email);
  const [phoneNumberId] = await signUpModel.getUserIdByPhoneNumber(phoneNumber);
  if(userAccount || userEmail || phoneNumberId) errors.userExistedError()
  

  if(region === "대표") { 
    const [representative] = await signUpModel.isRepresentativeExists()

    if(!representative) grade = 1;
    else if (representative) errors.representativeError()  // 대표 관리자는 1명만
  } else {
    const [regionId] = await signUpModel.getRegionIdByName(region); // region, 테이블에 존재하는 지역?
    
    if(regionId) grade = 2;
    else errors.regionError()
  }
  
  
  const salt = bcrypt.genSaltSync(11);
  const hashedPw = bcrypt.hashSync(password, salt);
  
  const isUserValid = emailValueCheck && phoneNumberValueCheck && passwordValueCheck
  if(isUserValid) return await signUpModel.createUser(name, account, email, hashedPw, phoneNumber, grade, region)
}


module.exports = { createUser }