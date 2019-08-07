const FS = require('fs');
var readlineSync = require('readline-sync');
const PATH = './src/containers/';// 创建组件文件路径，根据实际项目调整

//读取模板文件，替换相应内容，创建新模块文件
let replaceFile = function(filePath,sourceRegx){
    var componentName = readlineSync.question('Input the component name: ');
    FS.readFile(filePath,function(err,data){
        if(err){
            return err;
        }
        let arg = [componentName];// process.argv.splice(2);
        if(!componentName){
            console.log('Please input the component name!\n');
            return;
        }
        let str = data.toString();
        str = str.replace(sourceRegx, arg[0]);

        FS.mkdir(PATH + arg[0],(e)=>{
            if(!e){
                FS.mkdir(PATH + arg[0] + '/children', e=>{

                })
            }else{
                console.log('erro:', e)
            }
            
        });
        FS.writeFile(PATH + arg[0] + '/'+arg[0] + '.jsx', str, function (err) {
            if (err) return err;
        });
        FS.writeFile(PATH + arg[0] + '/'+arg[0] + '.scss', '.' + arg[0] + '{}', (err)=>{
            if (err) return err;
        })
        console.log('Component of '+ arg[0] + ' has completed!\n');
    });
    setTimeout(() => {
        replaceFile('./tmp/tmp.jsx', /FILENAME/g);
    },300);
    
}

replaceFile('./tmp/tmp.jsx', /FILENAME/g);


// var readlineSync = require('readline-sync');

// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');