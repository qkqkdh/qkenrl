# ABAO 프론트엔드 문서

## 구조

* 최상위 컴포넌트 : index.tsx
* App.tsx
* routes
  * index.tsx : Routing 정보를 저장하고 있으며, 클라이언트가 입력한 주소에 따라 분기하여 표시할 컴포넌트를 선택해준다.
* pages : 페이지 별 컴포넌트
* components : pages 컴포넌트에서 공통적으로 쓰이는 컴포넌트들 정의
* css : scss 폴더

### TODO
- Request 마다 헤더 등으로 location 전달 필요 ( HTTPS ) 