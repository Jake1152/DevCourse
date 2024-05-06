### 구동 방법
방법1. app.js 파일을 열고 오른쪽 상단 [실행] 버튼을 누르셔도 되고,  
방법2. vscode 터미널에서 node app.js 명령어도 가능합니다.


### DB 설정 위치  
DB 설정 파일은 아래 2곳입니다. 계정 변경이 필요하시면 참고 부탁 드려요.  

1) ./mariadb.js
```
const connection = mariadb.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'Bookshop',
    dateStrings : true
});
```

2) ./controller/OrderController.js
```
const order = async (req,res) => {
    const conn = await mariadb.createConnection({
        host : '127.0.0.1',
        user : 'root', // 변경 필요
        password : 'root', // 변경 필요
        database : 'Bookshop',
        dateStrings : true
    });
```
