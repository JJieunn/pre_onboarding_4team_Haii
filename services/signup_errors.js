const emailError = () => {
  const err = new Error("이메일 주소를 확인해주세요.")
    err.statusCode = 400
    throw err;
}

const passwordError = () => {
  const err = new Error("비밀번호를 확인해주세요.")
  err.statusCode = 400
  throw err;
}

const phoneNumberError = () => {
  const err = new Error("전화번호를 확인해주세요.")
  err.statusCode = 400
  throw err;
}

const userExistedError = () => {
  const err = new Error("이미 존재하는 계정입니다.")
  err.statusCode = 400
  throw err;
}

const regionError = () => {
  const err = new Error("지역이 잘못 입력되었습니다.")
  err.statusCode = 400
  throw err;
}

const representativeError = () => {
  const err = new Error("이미 대표관리자가 존재합니다.")
  err.statusCode = 400
  throw err;
}

module.exports = {
  emailError,
  passwordError,
  phoneNumberError,
  userExistedError,
  regionError,
  representativeError
}