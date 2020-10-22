 <template>

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-male-farmer text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; เพิ่มเกษตกร</h2> 
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
</template>

    <script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
  /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
props:{

},
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
    return {

txt:'Hello World'

        };
    }, 
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
     mounted:async function() {
    /**** เรียกใช้ methods ชื่อ load() */
        await this.load(); 
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
     async beforeRouteEnter(to, from, next) { 
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed:{

},
    /*-------------------------Methods------------------------------------------*/
methods:{
    /******* Methods default run ******/
    load:async function(){
}
},
    }
</script>
<style lang='postcss' scoped>

</style>