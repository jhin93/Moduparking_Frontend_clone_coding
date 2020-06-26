<template>
  <v-container class="container">
    <div class="t__blue t__title t__bold px-1 pb-8">자주 하는 질문</div>
    <div class="px-7 footer"></div>
    <v-row>
      <v-col class="px-1">
        <div class="AffiliateCooperation__t1">자세한 문의를 원하시면 고객센터로 연락바랍니다.</div>
        <div class="AffiliateCooperation__t1">모두의주차장고객센터 : 1899-8242, 운영시간(10:00~19:00)</div>
        <div class="AffiliateCooperation__t1">카카오톡 플러스친구 '모두의주차장'검색, 운영시간(09:00~18:00)</div>
        <div class="blank"></div>
      </v-col>
    </v-row>
    <v-row class="d-none d-md-block d-print-block">
      <v-col>
      <v-tabs class="qna__tab px-1" grow v-model="tab" color="#0099ff">
        <v-tab :ripple="false"  v-for="(rule,i) in rules"
          :key="i"
        >{{rule.tab}}
        </v-tab>
      </v-tabs>
       <v-tabs-items class="px-1"  v-model="tab">
        <v-tab-item class="selector-tabs "
          v-for="rule in rules"
          :key="rule.tab"
          :transition="false"
          :reverse-transition="false"
        >
          <div v-for="(subject,i) in rule.subjects" :key="i">
            <div  class="Step1 qna__title t__top-menu bottom_1rem px-1">{{subject.title}}</div>
            <div class="bottom_1rem">
              <div class= "qna__body1" v-for="(str) in subject.desc" :key="str">{{str}}</div>
            </div>
            <div class= "qna__body1" v-for="(str) in subject.remarks" :key="str">{{str}}</div>
            <div v-for="(str) in subject.appendances" :key="str">{{str}}</div>
          </div>
        </v-tab-item>
      </v-tabs-items>
      </v-col>
    </v-row>
    <v-row>
        <v-expansion-panels flat class="d-flex d-md-none no-transition">
          <v-expansion-panel
            v-for="(rule,i) in rules"
            :key="i"
          >
            <v-expansion-panel-header class="v-tab--active t__body" :expand-icon="null">{{rule.tab}}</v-expansion-panel-header>
              <v-expansion-panel-content class="selector-panels no-animation">
              <div v-for="(subject,i) in rule.subjects" :key="i">
                <div class="t__top-menu px-1">{{subject.title}}</div>
                <div class="bottom_1rem">
                  <div class="t__body px-1" v-for="(str) in subject.desc" :key="str">{{str}}</div>
                </div>
                <div class="bottom_1rem">
                  <div class="t__body px-1" v-for="(str) in subject.remarks" :key="str">{{str}}</div>
                </div>
                <div class="bottom_1rem">
                  <div class="t__body px-1" v-for="(str) in subject.appendances" :key="str">{{str}}</div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'QnA',
  data: () => ({
    index: null,
    rules: [
      {
        tab: '취소 및 환불',
        subjects: [
          {
            title: '◆ 모바일주차권 환불',
            desc: ['주차권 하단 [구매취소] 또는 [환불신청] 버튼을 눌러주세요.'],
            remarks: [
              '※ 버튼이 없는 경우 카카오톡에 [주차장/결제일자/차량번호/휴대폰번호]를 남겨주세요.',
              '※ 앱에서 접수된 환불신청은 취소되지 않으므로 필요 시 주차권을 재구매 해주세요.'
            ]
          },
          {
            title: '◆ 주차장 이중 결제 환불',
            desc: ['[현장결제 영수증 또는 결제내역] + [휴대폰번호/차량번호/현장결제 카드사,카드번호]를 남겨주세요.'],
            remarks: []
          },
          {
            title: '◆ 공유주차장 이용권',
            desc: ['주차권 하단 [결제취소] 버튼을 눌러주세요.'],
            remarks: [
              '※ 버튼이 없는 경우 채팅창에 [휴대폰번호/주차장번호/결제일자]를 남겨주세요.'
            ]
          },
          {
            title: '◆ 포인트(충전금)환불',
            desc: ['채팅창에 [휴대폰번호/환불금액]을 남겨주세요.'],
            remarks: []
          }
        ]
      },
      {
        tab: '부정주차 처리',
        subjects: [
          {
            title: '◆ 부정주차 처리',
            desc: ['– 주차된 차량에 남겨진 연락처로 이동요청 후 주차해주세요.'],
            remarks: []
          },
          {
            title: '◆ 결제취소',
            desc: ['– 결제 후 10분이 지나지 않은 경우 내주차권 페이지에서 [결제취소]후 다른 구역을 이용해주세요.'],
            remarks: []
          },
          {
            title: '◆ 차량 이동 및 결제취소가 안되는 경우',
            desc: [
              '– [휴대폰번호/주차장번호/결제일자]를 남겨주시면 확인 후 환불처리 도와드리겠습니다.',
              '– [부정주차 차량 사진]을 남겨주시면 단속 강화 자료로 활용하겠습니다.'
            ],
            remarks: [
              '부정주차 없는 공유주차 서비스를 위해 더욱 노력하겠습니다.'
            ]
          }
        ]
      },
      {
        tab: '공유주차장 이용안내',
        subjects: [
          {
            title: '◆ 구매 전 유의사항',
            desc: ['– 실제로 자리가 비어있어도 앱에서 확인되지 않으면 이용할 수 없습니다.'],
            remarks: ['– 경차, 저공해차 등에 의한 별도 할인은 적용되지 않습니다.']
          },
          {
            title: '◆ 사용 시 주의사항',
            desc: ['– 차량번호를 잘못 입력하거나 결제한 시간 이후에도 주차 시 단속될 수 있습니다.'],
            remarks: ['– 공유주차장은 월주차 등 장기 이용 불가합니다.'],
            appendances: [
              '– 시간 연장은 주차권 내 [연장]버튼으로 가능합니다.',
              '(※ 주차장 운영시간 내에서만 가능. 이외 시간 공유자가 직접 사용.)'
            ]
          },
          {
            title: '◆ 구획과 구간',
            desc: [
              '– 구획 : 지정된 번호에 주차',
              '예) 구획14-1-15 > 14-1-15 또는 1-15 주차'
            ],
            remarks: [
              '– 구간 : 같은 숫자 앞자리 중 빈곳에 주차',
              '예) 구간9-60 > 9-60-1,2,3,4,,,,중 빈곳 주차'
            ]
          }
        ]
      },
      {
        tab: '월주차권 이용안내',
        subjects: [
          {
            title: '◆ 구매 방법',
            desc: [
              '① 앱에서 이용 희망 위치 검색',
              '② 검색 후 파란색 [월주차]핀 확인',
              '③ 안내사항 확인 후 구매',
              '④ 구매 후 문자로 발송되는 신청서 작성'
            ],
            remarks: ['※ 지도에 주차권이 없는 경우 월주차장이 없는 지역입니다.']
          },
          {
            title: '◆ 유의사항',
            desc: [
              '– 평일 10시~16시에만 구매 가능',
              '– 구매 후 다음날부터 이용 가능',
              '– [연장권]만 판매중인 경우 신규접수 불가 (자동결제취소)'
            ],
            remarks: []
          },
          {
            title: '◆ 등록 확인',
            desc: ['– 구매 후 별도의 등록 확인 알림 미제공 (서비스 준비중)'],
            remarks: ['※ 주차권 이용기간 확인은 채팅창에 [차량번호/휴대폰번호]를 남겨주세요.']
          }
        ]
      },
      {

        tab: '모바일 주차권 이용안내',
        subjects: [
          {
            title: '◆ 구매 전 유의사항',
            desc: [
              '– 파란색 핀만 구매 가능합니다.',
              '– 주차권은 당일 구매, 당일 사용입니다.',
              '– 주차한 상태에서 당일권 및 심야권을 추가 구매해도 연장 주차할 수 없습니다.',
              '– 입차예정시간은 가급적 지켜주시되 정해진 유효시간 내 입출차하시면 사용 가능합니다.',
              '– 경차, 저공해차 등에 의한 별도 할인은 적용되지 않습니다.'
            ],
            remarks: [],
            isSeperated: true
          },
          {
            title: '◆ 주차권이 사용되지 않는 상황',
            desc: [
              '– 입차한 후에 주차권을 구매',
              '– 주차권 유효시간보다 빨리 입차, 늦게 출차',
              '– 차량번호를 잘못 입력',
              '– 한 번 출차 후 다시 입차하는 경우'
            ],
            remarks: ['※ 해당 경우 전체 주차시간에 현장 요금이 부과됩니다.']
          }
        ]
      }
    ],
    tab: null
  })
}
</script>
<style scoped>
.container{
  max-width:1140px;
}
.v-tab.v-tab {
  border-bottom: 1px solid rgba(0,153,255,0.2) !important;
}
.v-tab--active {
  border: 1px solid rgba(0,153,255,0.2) !important
}
.v-expansion-panel{
  margin:0px !important;
}
.tab--active::before {
  opacity: 0 !important
}
.theme--light.v-tabs .v-tab:hover::before{
  opacity: 0 !important
}
.expand-transition-enter-active .expand-transition-leave-active{
  transition-duration: 0s !important;
}
.v-expansion-panel{
  transition:none !important
}
.v-expansion-panel-content__wrap {
  padding-top:10px !important;
}
.blank{
  margin:2rem;
}
.headers{
  display: flex;
}
.selector-tabs{
  border-right : 1px solid rgba(0,153,255,0.2);
  border-left : 1px solid rgba(0,153,255,0.2);
  border-bottom : 1px solid rgba(0,153,255,0.2);
  padding:1%;
  padding-top:2%;
  padding-bottom:2%;
}
.selector-panels{
  border-right : 1px solid rgba(0,153,255,0.2);
  border-left : 1px solid rgba(0,153,255,0.2);
  border-bottom : 1px solid rgba(0,153,255,0.2);
  padding-top:2%;
  padding-bottom:2%;
}
.padding-2\.5\%{
  padding:2.5%
}
.padding-4\%{
  padding:3%;
}
.footer{
  border: 1px solid rgba(0,153,255,0.1);
  padding-top:0px !important
}
.Step1{
  padding: 3rem 0 0 0
}
</style>
