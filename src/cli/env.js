const parseEnv = () => {
  const obj = process.env
  const keys = Object.keys(obj).filter(key => key.startsWith('RSS_'))
  let res = ''
  for (let i = 0; i < keys.length; i++) {
    if(i !== keys.length - 1) {
      res += `${keys[i]}=${obj[keys[i]]}; `
    } else {
      res += `${keys[i]}=${obj[keys[i]]}`
    }
  }
  console.log(res)
};

parseEnv();