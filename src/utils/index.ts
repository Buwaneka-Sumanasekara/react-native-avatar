import AvatarColors from "./colors";

export function getAcronymText (txt:string) {
    let name = ''
    if (txt) {
      name = txt.charAt(0)
    }
    return name.toUpperCase()
}

export function getAvatarColor (title) {
  let totalNumber = 0
  for (let i = 0; i < title.length; i++) {
    const code = title.charCodeAt(i)
    totalNumber += code
  }
  const ColorIndex = (totalNumber % AvatarColors.length)
  return AvatarColors[ColorIndex]
}
