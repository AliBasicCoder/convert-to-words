
export const isBetween = (num: number, from: number, to: number) => {
  if(num >= from && num <= to){
    return true;
  }
  return false;
}