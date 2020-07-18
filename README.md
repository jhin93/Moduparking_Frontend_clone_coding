# homepage

1 . Express로 제작된 ‘모두의주차장’ 샘플 페이지를 Vue.js와 Vue.js와 호환되는 라이브러리, Lodash 등을 이용하여 SPA로 클로닝하였습니다.

2. Node.js를 기반으로 진행했습니다. npm을 사용하여 필요한 패키지를 설치합니다.

3. 코드 내 각종 오류를 방지하기 위해 ESLint를 사용했습니다. 

4. 기기별 반응형 그리드를 구현하기 위해 Sass를 사용했습니다. 그리고 Vuetify의 그리드 breakpoint의 값을 모두컴퍼니가 요구하는 픽셀로 커스터마이징하여 PC, 태블릿, 모바일 버전의 화면을 각각 구성했습니다.

5. Naver 지도 API를 사용하여 웹 내 지도 앱을 구현했습니다. 모두컴퍼니의 위도와 경도를 구글 맵에서 가져와 lat과 lng를 수정하고, 핀으로 모두컴퍼니의 주소를 표시했습니다.

6. EmailJS를 사용하여 웹 내 이메일 앱 팝업 기능을 구현했습니다. window.open을 버튼 이벤트로 설정하여 ‘문의하기’ 버튼 클릭 시 이메일 앱이 팝업됩니다.

7. Vue.js를 사용하여 container와 row, col 등의 개념으로 페이지 레이아웃을 구현했습니다. 기기별 픽셀 반응에 따라 이미지, 버튼 등의 배치가 변화되도록 설정했습니다.

8. ScrollAnimation을 사용하여 모바일 앱 목업 이미지, 텍스트 등의 요소에 애니메이션 효과를 부여했습니다. 유저가 애니메이션 효과를 잘 인식할 수 있도록 transition-delay를 사용했습니다.


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
