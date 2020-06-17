<template>
<div class="container">
  <div>
    <div>
      <div class="header">A Simple Guide to Design Thinking</div>
      <h5 class="date">by user / January 13, 2020</h5>
    </div>
    <img src='../assets/article2.jpg'>
    <div>
      <div class="title1">Introduction</div>
      <p>Readymade godard brooklyn, kogi shoreditch hashtag hella shaman kitsch man bun pinterest flexitarian.
        Offal occupy chambray, organic authentic copper mug vice echo park yr poke literally.
        Ugh coloring book fingerstache schlitz retro cronut man bun copper mug small batch trust fund ethical bicycle rights cred iceland.
        Celiac schlitz la croix 3 wolf moon butcher. Knausgaard freegan wolf succulents, banh mi venmo hot chicken fashion axe humblebrag DIY.

        Waistcoat gluten-free cronut cred quinoa. Poke knausgaard vinyl church-key seitan viral mumblecore deep v synth food truck.
        Ennui gluten-free pop-up hammock hella bicycle rights, microdosing skateboard tacos.
        Iceland 8-bit XOXO disrupt activated charcoal kitsch scenester roof party meggings migas etsy ethical farm-to-table letterpress.
        Banjo wayfarers chartreuse taiyaki, stumptown prism 8-bit tote bag.
      </p>
      <h2 class="title1">Story</h2>
      <p>Listicle offal viral, flannel franzen roof party shoreditch meditation subway tile bicycle rights tbh fingerstache copper mug organic umami.
        Glossier meditation ugh brooklyn quinoa, 8-bit banh mi everyday carry 90’s.
        Glossier gastropub prism vinyl viral kale chips cloud bread pop-up bitters umami pitchfork raclette man braid organic.
        Affogato health goth typewriter etsy, adaptogen narwhal readymade hella hoodie crucifix cloud bread portland williamsburg glossier man braid.
        Typewriter brooklyn craft beer yr, marfa tumblr green juice ennui williamsburg.
        Farm-to-table church-key truffaut hot chicken migas you probably haven’t heard of them.
        Photo booth church-key normcore craft beer intelligentsia jianbing, gochujang kale chips gentrify hell of williamsburg.
      </p>
      <h2 class="title1">Conclusion</h2>
      <p>Venmo fixie knausgaard readymade. 3 wolf moon blue bottle sartorial blog. Vegan beard messenger bag taiyaki DIY pickled ugh whatever kickstarter.
        Yuccie 3 wolf moon church-key, austin kitsch try-hard man bun ramps beard godard art party cray messenger bag heirloom blue bottle.
        Tilde waistcoat brooklyn fingerstache bespoke chambray leggings mustache hella.
      </p>
    </div>
  </div>
  <div class="footer"></div>
  <div>
    <div class="comments"></div>
    <v-form>
      <div>
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
      </div>
      <h2 class="">Comment</h2>
      <v-text-field v-model='comments' outlined height='200' ></v-text-field>
        <v-container>
          <v-row>
          <v-col cols='12' xs='12' sm='4'>
            <h4>Name *</h4>
            <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                outlined
                required ></v-text-field>
          </v-col>
          <v-col cols='12' xs='12' sm='4'>
            <h4>Email *</h4>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols='12' xs='12' sm='4'>
            <h4>Website</h4>
            <v-text-field outlined v-model='website'></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-checkbox v-model="remember" :off-icon='offIcon' :on-icon='onIcon' label='
Save my name, email, and website in this browser for the next time I comment.'></v-checkbox>
      <v-btn class="d-none d-md-block d-print-block right" @click='submit' dark :ripple="false" >submit</v-btn>
      <v-btn class="d-flex d-md-none " @click='submit' dark :ripple="false" >submit</v-btn>
    </v-form>
  </div>
</div>
</template>

<script>
import { mdiCheckboxMarked, mdiCheckboxBlank } from '@mdi/js'
export default {

  name: 'article20200113',
  data: () => ({
    onIcon: mdiCheckboxMarked,
    offIcon: mdiCheckboxBlank,
    valid: false,
    remember: false,
    firstname: '',
    website: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    comments: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    submit: () => {
      // todo something
    },
    test: () => {
      console.log(this.icons)
    }
  }
}
</script>

<style scoped>
.right{
  float: right !important;
}
.header{
  font-size: 4rem !important;
  font-weight: bold;
}
.title1{
  font-size: 3rem ;
  font-weight: bold !important;
}

</style>
