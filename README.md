# Moduparking (with 모두컴퍼니)

코드 스테이츠의 파이널 프로젝트로 실시한 기업 협업 프로젝트 'Moduparking'입니다.

주차장 어플리케이션 '모두의주차장' 을 서비스하는 스타트업, 모두컴퍼니와 협업했습니다.

Express로 제작된 ‘모두의주차장’ 샘플 페이지를 Vue.js와 이에 호환되는 라이브러리를 사용하여 SPA로 클로닝하였습니다.

<br>

개요

Vue.js, Node.js, lodash를 기반으로 진행되었습니다.

해당 SPA는 사용자에게 기업에 대한 정보와 '모두의주차장' 앱에 대한 전반적인 정보를 제공합니다.<br>

역할

- Team Leader : 프로젝트 팀에서 팀장으로 참여했습니다. 기업과 팀, 부트캠프와의 커뮤니케이션을 담당했습니다.
- Front-end Developer : 총 6개의 웹 페이지 중 3개의 페이지를 담당하여 제작하였습니다. 아래의 순서로 협업을 진행했습니다.

   <br>

   1. 작업환경 셋팅

   - 기업에서 요구하는 환경을 먼저 구축했습니다. Node.js와 Vue.js를 설치, 각각의 버전을 기업에서 요구하는 버전으로 통일했습니다.
   
   - 코드 내 각종 오류를 방지하기 위해 ESLint를 설치, 사용했습니다.
   
   <br>

   2. 일괄 적용 기능 구현

   - 가장 먼저 Vue.js로 v-container와 v-row, v-col 등의 개념으로 페이지 레이아웃을 구현했습니다. 
      기기별 픽셀 반응에 따라 이미지, 버튼 등의 배치가 변화되도록 구현했습니다.

   - 기기별 반응형 그리드를 구현하기 위해 Sass를 사용했습니다. 
      그리고 Vuetify의 그리드 breakpoint의 값을 모두컴퍼니가 요구하는 픽셀로 커스터마이징하여 PC, 태블릿, 모바일 버전의 그리드를 각각 구성했습니다.

   <br>

   3. 페이지별 기능 구현

    - 서비스 소개 페이지 : 가장 처음에 나오는 메인 화면입니다. ScrollAnimation을 사용하여 모바일 앱 목업 이미지, 텍스트 등의 요소에 애니메이션 효과를 부여했습니다. 
      강조할 부분은 transition-delay를 사용하여 시간차로 효과를 부각했습니다.

    - 기업 소개 페이지 : 기업에 대한 정보를 텍스트로 담은 페이지입니다. 일괄적으로 적용된 반응형 그리드 이외엔 특별히 구현된 기능은 없습니다.

    - 제휴협력 페이지 : 회사의 위치와 메일주소 등 제휴 협력을 위한 정보를 담은 페이지입니다. 
      - 지도 : 회사 위치가 표시된 지도를 Naver 지도 API를 사용하여 앱 내부에 지도를 구현했습니다. 구글 맵에서 위도와 경도를 가져와 lat과 lng를 수정했습니다. Map.vue라는 컴포넌트를 만들어 네이버에서 제공하               는 naver-map 템플릿을 작성하고, API를 가져왔습니다. 그리고 Map.vue를 해당 페이지에 import하여 완성했습니다. 
      - 이메일 : EmailJS를 사용하여 직접 문의사항을 전달할 수 있는 웹 내 이메일 앱 팝업 기능을 구현했습니다. window.open을 버튼 이벤트로 설정하여 ‘문의하기’ 버튼 클릭 시 이메일 앱이 팝업됩니다.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
