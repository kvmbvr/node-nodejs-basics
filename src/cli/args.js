const parseArgs = () => {
  const args = process.argv.slice(2)
  let res = ''
  const arr = []
  for(let i = 0; i < args.length; i += 2) {
    arr.push(args.slice(i, i + 2))
  }
  for(let i = 0; i < arr.length; i++) {
    if(i !== arr.length - 1) {
      res += `${arr[i][0].slice(2)} is ${arr[i][1]}, `
    } else {
      res += `${arr[i][0].slice(2)} is ${arr[i][1]}`
    }
  }
  console.log(res)
};

parseArgs();