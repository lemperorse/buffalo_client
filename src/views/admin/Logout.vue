<template>
<v-dialog v-model="dialog" fullscreen persistent max-width="500px" transition="dialog-transition">
    <v-card>
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
            <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" style="max-width: 500px">
                <div class="w-full pt-1 pb-5">
                    <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                        <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                    </div>
                    <div>
                        {{user.first_name}} &nbsp;{{user.last_name}}
                    </div>
                </div>
                <div class="w-full mb-10">
                    <p class="text-xl text-gray-600 text-center px-5">คุณแน่ใจใช่ไหมที่จะ ออกจากระบบ</p>
                </div>
                <div class="w-full">
                    <div class="flex flex-row flex-wrap  ">
                        <div class="w-1/2 p-2">
                            <v-btn @click="$router.push('/admin/')" class="w-full" dark color="">อยู่ในระบบต่อไป</v-btn>
                        </div>
                        <div class="w-1/2 p-2">
                        <v-btn @click="prepareLogout()"  class="w-full" dark color="red darken-4">ออกจากระบบ</v-btn>
                        </div> 
                    </div>

                </div>
            </div>
        </div>
    </v-card>
</v-dialog>
</template>

<script>
import {
    sync,
    call
} from 'vuex-pathify';
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            form: {},
            txt: 'Hello World',
            dialog: true,
            user: {},

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {
        ...sync('auth/*')
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('auth/*'),
        async prepareLogout(){
            localStorage.clear();
            await this.logout();
            await this.$router.replace('/')
        },
        /******* Methods default run ******/
        load: async function () {
            this.user = await this.getDefaultProfile();
        }
    },
}
</script>

<style scoped>
.bg {
    background: #000000 url(https://www.img.in.th/images/fe63e0ee1d678a04ad8d5aefb976aba6.jpg) no-repeat left top;
    background-size: cover;
}

.width {
    width: 100%;
}

.fcw {
    color: white;
}

.imglogin {
    width: 65%;
}
</style>
