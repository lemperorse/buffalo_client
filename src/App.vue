 
 <template>
  <div>
     
     <router-view /> 
  </div>
</template>

  <script>
    import { VBtn, VChip } from 'vuetify/lib'

export default {
  name: "Root",
  /*-------------------------ประกาศ components ---------------------------------------*/
  components: {
   VBtn, VChip
  },
  /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
  props: {},
  /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
  data() {
    return {
      txt: "Hello World",
      button: true 
    };
  },
  /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
  mounted: async function () {
    /**** เรียกใช้ methods ชื่อ load() */
    await this.load();
  },
  /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
  computed: {
     ss:function(){
      return process.env.VUE_APP_URL
    }
  },
  /*-------------------------Methods------------------------------------------*/
  methods: {
    /******* Methods default run ******/
    load: async function () {},
  },
};
</script>
<style lang='postcss' scoped>
</style>