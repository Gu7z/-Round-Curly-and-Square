const verify = (str) => {
  str = str.split('')
  tokens = {
    '(': {initial: true},
    '[': {initial: true},
    '{': {initial: true},
    '}': {opener: '{'},
    ']': {opener: '['},
    ')': {opener: '('},
  }

  opened = []
  
  if(!str.length){ return true }
  if(!tokens[str[0]].initial){ return false }

  str.forEach(el => {
    if (tokens[el].initial){
      opened.push(el)
    }else{
      if(tokens[el].opener == opened[opened.length - 1]){
        opened.pop()
      }else{
        return false
      }
    } 
  })

  if(opened.length){
    return false
  }else{
    return true
  }
  
}
