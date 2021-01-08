# ABAO

앞으로 쓰게 될 개발 스택에 대해 간단한 ! 설명 & 예제 입니다.

실행하는법
1. 도커 설치(https://blog.thereis.xyz/51)
2. 터미널에서 프로젝트 경로로 간 뒤 `docker-compose up`
### Frontend
우선 프론트엔드는 javascript에 typescript를 적용한 React 라이브러리를 이용해 작성할 것이고,
Create-react-app을 이용해서 배포할 것입니다.
css 스타일링은 sass, 기본적인 컴포넌트들은 material-ui 이용해서 작성하고
상태관리는 React Hook을 이용하며 서버와 API 통신할 때는 axios 라이브러리를 이용합니다.

### Server

백엔드 서버도 javascript + typescript를 적용한 nodejs Express 프레임워크로 구성되고
데이터베이스는 NoSQL인 Mongodb, 디비 코드 작성을 위해 Mongoose 라이브러리를 이용합니다.

### Structure
- /backend : node + express 로 구현한 API 서버.
- /frontend : CRA(Create-React-App) 이용한 프론트엔드 서버
- /nginx : proxy

기본적으로 node 2개(API서버, 프론트) + nginx + DB 총 4개 컨테이너 띄워서 통신하도록 하였습니당.

80 포트로 접근하면 nginx가 프론트 또는 API 서버로 라우팅 합니다.

예를 들어 http://localhost 로 접속 시 리액트 서버, http:/localhost/api 로 접근시 API 서버


### frontend

hook 을 이용해서 form 상태 저장 후 API를 호출해보는 예제입니다.ㅎㅎ

##### 사용 라이브러리
- axios : http request
- material-ui : 예쁜 UI를 가진 컴포넌트
- react-hook-form : form 상태관리(귀찮아서 씀, useState로 구현해보세용)

코드 설명은 귀찮아서 패쓰.. 궁금한게 있으면 물어보면 대답해드릴게요...

frontend/src/components/Register.tsx : 회원가입 관련 컴포넌트
frontend/src/components/UserList.tsx : 유저 목록 가져오는 컴포넌트

### 공부 자료

React
- https://react.vlpt.us/ > 필요한 거만 보면 될듯? 1장 1~11 2장 4장 1 5장
- https://ko.reactjs.org/



[프론트엔드와 백엔드가 소통하는 엔드포인트, RESTful API](https://evan-moon.github.io/2020/04/07/about-restful-api/)
