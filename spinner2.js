const char = ['|','/','-','\\','|','/','-', '\\', '|', '\n']
let time = 0;
for(let item of char){
  setTimeout(() => {
    process.stdout.write(`\r${item}`);
  }, time += 200);
}
