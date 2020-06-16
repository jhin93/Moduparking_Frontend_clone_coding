<template>
  <div class="container">
    <div class= "t__title t__blue t__bold" >홍보자료</div>
    <v-container>
      <v-row >
        <v-col v-for="(item,i) in items" :key="i" class="news-container" cols='12' xs='12' sm='6' md='6' lg='6' xl='6'>
        <div class='article'>
          <v-card :ripple="false" tile raised  :to='item.to'>
            <v-img eager class='imges' max-height="220px" :src='item.src'></v-img>
          </v-card>
          <router-link class="t__title t__bold text_deco t__black" :to='item.to'>{{item.title}}</router-link>
          <div class="date">{{item.createdAt}}</div>
          <div class="desc">{{item.desc}}</div>
          <router-link class="text_deco t__bold t__black" :to='item.to'>더 알아보기</router-link>
        </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import images from '../assets'
/**

*/
export default {
  name: 'news',
  data: function () {
    return {
      images: images,
      items: [
        {
          title: '보도홍보자료',
          src: images.articles.article1,
          createdAt: 'June 4, 2020',
          desc: '국내 1위 주차 앱은 ‘사회적 가치’를 고민한다’ 302만 vs 299만 왼쪽은 서울시에서 1년에 발생하는 불법 주차 건수, 오른쪽은 서울시 안에 등록된 차량 대수다. 등록된 차량 수보다 불법 주차 건수가 더 많다니.…',
          to: '/2020/06/04/elementor-645'
        },
        {
          title: 'A Simple Guide to Design Thinking',
          src: images.articles.article2,
          createdAt: 'January 13, 2020',
          desc: 'Introduction Readymade godard brooklyn, kogi shoreditch hashtag hella shaman kitsch man bun pinterest flexitarian. Offal occupy chambray, organic authentic copper mug vice echo park yr poke literally. Ugh coloring book…',
          to: '/2020/01/13/a-simple-guide-to-design-thinking/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container{
  max-width:1140px;
  padding: 0% !import;
}
.images{
  max-width:50%
}
.date{
  color:rgba(0,0,0,0.4);
  margin-bottom:1rem;
  font-size:0.9rem
}
.desc{
  margin-bottom:1rem;
}
.article{
  max-width:95%
}

</style>
