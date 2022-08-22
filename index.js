// 8.22 <프론트엔드 웹개발자-데브매칭 테스트 풀이> -- 지난 상반기 문제라서 서버가 없어서 만들어준거임
// 시험에서는 서버 만들 필요 없음!!👌
// 맨처음 '새터미널' 열어서 
// 1. npm init  ->npm 초기화
// 2. npm install express  설치
// 3. npm install cors  설치

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

// 임시배열 만들기
let langArr = [
    'Javascript',
    'java',
    'typescript',
    'php',
    'Asp',
    'Jsp',
    'React',
    'Python',
    'nodejs',
    'AngelScript',
    'CobolScript',
    'json',
    'jsonjava'
]
app.use(express.json());    //json파일 사용하기
app.use(cors());    //요청 사용하기

app.get('/languages', function(req,res){
    //대소문자 구분없이 검색시 떠야하니까 --> 글자를 소문자로 다 바뀌게 해줘야한다!( toLowerCase()이용 )
    let langArr2 = langArr.filter(r=> r.toLowerCase().includes(req.query.keyword)) //--> 바꾼 상태에서 keyword만 체크해서! --> 보내주겠다  //req.query.keyword: 쿼리스트링으로 보내는건 쿼리로 받음 
    res.send({ langArr: langArr2 })                                                //  여태 우리는 params 만 해봤음..! parameter 이용한거
})

// 서버실행
app.listen(port, ()=>{
    console.log('연습용 서버가 돌아가고 있습니다.');
})

// 터미널에 node index.js 하면 서버 돌아간다고 뜸
// postman으로 테스트해보기1>
// GET  http://localhost:3002/languages?keyword=script   ---> keyword 뒤에 적는게 저 글자가 들어가는 거만 뜨게 해줌!
// 하고 send하면, 밑에 script가 들어간 애들만 나옴!
// ==>
// {
//     "langArr": [
//         "Javascript",
//         "typescript",
//         "AngelScript",
//         "CobolScript"
//     ]
// }
// postman으로 테스트해보기2>
// GET  http://localhost:3002/languages?keyword=java   ---> keyword 뒤에 적는게 저 글자가 들어가는 거만 뜨게 해줌!
// 하고 send하면, 밑에 java가 들어간 애들만 나옴!
// ==>
// {
//     "langArr": [
//         "Javascript",
//         "java",
//         "jsonjava"
//     ]
// }