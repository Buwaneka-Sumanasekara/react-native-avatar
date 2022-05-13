

export function getAcronymText (txt:string) {
    let name = ''
    if (txt) {
      name = txt.charAt(0)
    }
    return name
}
