### 구동 방법

방법1. app.js 파일을 열고 오른쪽 상단 [실행] 버튼을 클릭  
방법2. vscode 터미널에서 node app.js 명령어도 가능합니다.  
방법3. 터미널에서 npm start 명령어도 가능합니다.  
 -> nodemon app.js 실행됨

### DB 설정 위치

DB 설정 파일은 아래 2곳입니다. 계정 변경이 필요하시면 참고 부탁 드려요.

1. ./mariadb.js

```
const connection = maria.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dateStrings: true, // 시간대 맞추기
})
```

2. ./controller/OrderController.js

```
const order = async (req,res) => {
    const conn = maria.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dateStrings: true, // 시간대 맞추기
    })
    ...
```
