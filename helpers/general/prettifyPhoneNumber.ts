type TPrettifyPhoneNumberArg =
  `+${string}-${string}-${string}-${string}-${string}` // +1-111-111-11-11

const prettifyPhoneNumber = (phoneNumber: TPrettifyPhoneNumberArg) =>
  phoneNumber
    .split('-')
    .map((item, idx) => (idx < 3 ? ` ${item}` : `-${item}`))
    .join('')

export default prettifyPhoneNumber
