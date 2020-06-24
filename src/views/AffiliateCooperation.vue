<template>
  <v-container class="container">
    <div class=" margin_1rem">
      <v-col
        class="txt-box"
        cols="12"
        md="12"
        sm="12"
        xl="12"
      >
        <v-row>
          <div class = "t__blue t__title t__bold"> 제휴 협력 </div>
        </v-row>
        <v-row class="footer"></v-row>
        <v-row>
          <div class = "AffiliateCooperation__t1"> 서울특별시 성수동 1가 왕십리로 115, 헤이그라운드 8층 모두컴퍼니 </div>
        </v-row>
        <v-row>
          <div class = "AffiliateCooperation__t1"> contact@moduparking.com </div>
        </v-row>

        <v-row>
          <v-col
          class="map-box"
          cols="12" sm="6"
          >
            <Map />
          </v-col>
          <v-col
            class="input-box"
            cols="12" sm="6"
          >
            <div>
              <form action="/action_page.php">
                <input type="text" id="fname" name="firstname" placeholder="성함">

                <input type="text" id="lname" name="lastname" placeholder="연락처">

                <input type="text" id="lname" name="lastname" placeholder="이메일">

                <form>
                  <textarea>문의내용을 입력해 주세요 :)</textarea>
                </form>
                <v-row class="row-submit">
                <input type="submit" value="문의하기">
                </v-row>
              </form>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import Map from '../components/Map'

export default {
  name: 'AffiliateCooperation',
  components: {
    Map
  }
}
</script>

<style scoped>
.row-submit{
  display: flex;
  justify-content: center
}
.container{
  max-width:1140px;
}
/* div{
  border: solid;
  border-color: red
} */
.head-txt{
  margin: 0.5rem 0rem;
}
.body-txt{
  margin: 2rem 0rem;
}
.txt-box{
  margin: 0rem 0rem 4rem 0rem;
}
.circle12{
  width: 100%
}

input[type=text], select {
  width: 100%;
  padding: 6px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 20%;
  background-color: #0099ff;
  color: white;
  padding: 7px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  opacity: 0.5;
}
</style>
