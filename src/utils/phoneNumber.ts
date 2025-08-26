const phoneNumber = ['9528865610', '8923984819', '783020171']

export const getRandomPhoneNumber = () => {
  const index = Math.floor(Math.random() * phoneNumber.length)
  return phoneNumber[index]
}
