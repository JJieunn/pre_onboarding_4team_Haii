const accountError = () => {
  const err = new Error("계정 주소를 확인해주세요.")
    err.statusCode = 400
    throw err;
}

const passwordError = () => {
  const err = new Error("비밀번호를 확인해주세요.")
  err.statusCode = 400
  throw err;
}

const phoneNumberError = () => {
  const err = new Error("핸드폰 번호를 확인해주세요.")
  err.statusCode = 400
  throw err;
}

const userExistedError = () => {
  const err = new Error("이미 있는 계정입니다.")
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
  accountError,
  passwordError,
  phoneNumberError,
  userExistedError,
  regionError,
  representativeError
}