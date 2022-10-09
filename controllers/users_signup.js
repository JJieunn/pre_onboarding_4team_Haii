const signUpService = require('../services/users_signup')


const createUser = async (req, res) => {
  const { name, account, password, phoneNumber, region } = req.body;

  if(!(name && account && password && phoneNumber)) {
    res.status(400).json({ err: "칸을 제대로 입력해주세요." })
  }
  
  if( password.length < 8 || password.length > 16) {
    res.status(400).json({ err: "비밀번호 길이를 확인해주세요." })
  }


  try {
    await signUpService.createUser(name, account, password, phoneNumber, region)
    res.status(200).json({ message: "회원가입 되었습니다." })
  } catch (err) {
    console.log(err)
    res.status( err.statusCode || 500 ).json({ err: err.message })
  }
}



module.exports = { createUser }