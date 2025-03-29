

export function arrayJoin(array, separator=',') { 
  return array.reduce( (s,x,i) => s+(i>0 ? separator : '') + (x==null ? '' : x), '') 
}
