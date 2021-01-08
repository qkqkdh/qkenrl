# ABAO

앞으로 쓰게 될 개발 스택에 대해 간단한 ! 설명 & 예제 입니다.

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

hook 을 이용해서 form 상태 저장 후 회원가입 API를 호출해보는 예제입니다.ㅎㅎ

##### 사용 라이브러리
- axios : http request
- material-ui : UI
- react-hook-form : form 상태관리(귀찮아서 씀, useState로 구현해보세여)


### backend


### TODO
 - frontend, backend ts 적용
 - vault 이용해서 ENVIRONMENT
 - 서버에 cors
 - mongodb container 추가
 - 예제 코드 작성
