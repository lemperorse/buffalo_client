<template>
<v-app id="inspire">
    <v-main class="bg">
        <v-container class="fill-height" fluid>
            <v-row class="" align="center" justify="center">
                <v-col cols="10" sm="8" md="4">
                    <div class=" text-center">
                        <img class="imglogin" src="https://www.img.in.th/images/baec9e10112fc5b2253841c3099c9e42.png" alt="">
                        <h2 class="fcw">ยินดีต้อนรับเข้าสู่ระบบ</h2>
                    </div>
                    <div class="mt-6">
                        <v-text-field v-model="form.username" rounded solo label="เข้าสู่ระบบ" name="login" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                        <v-text-field v-model="form.password" rounded solo id="password" label="รหัสผ่าน" name="password" prepend-inner-icon="mdi-lock" type="password"></v-text-field>
                        <v-spacer></v-spacer>
                        <v-btn class="width" rounded dark @click="prepareLogin()" large color="green">
                            <v-icon>mdi-login</v-icon>
                            <h1>เข้าสู่ระบบ</h1>
                        </v-btn>
                    </div>
                    <div>
                        <v-card-title primary-title>
                            <v-spacer></v-spacer>
                            <v-btn depressed rounded @click="$router.push('forgotpassword')" color="error">ลืมรหัสผ่าน</v-btn>
                        </v-card-title>
                    </div>

                </v-col>
            </v-row>

            <v-row class="" align="center" justify="center">
                <v-col cols="10" sm="8" md="4">
                    <v-divider class="pa" color="white"></v-divider>
                    <div>
                        <v-card-title primary-title>
                            <v-btn rounded depressed @click="$router.push('register')" color="indigo" dark>สมัครสมาชิก</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn depressed rounded @click="$router.push('contact')">ติดต่อแอดมิน</v-btn>
                        </v-card-title>
                    </div>
                </v-col>
            </v-row>

        </v-container>
    </v-main>
</v-app>
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
            txt: 'Hello World'

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
        async prepareLogin() {
            await this.login(this.form);
        },
        async screenShot(){
            navigator.screenshot.save(function (error, res) {
                if (error) {
                    console.error(error);
                } else {
                    console.log('ok', res.filePath);
                }
            });
        },
        /******* Methods default run ******/
        load: async function () {
            navigator.screenshot.save(function (error, res) {
                if (error) {
                    console.error(error);
                } else {
                    console.log('ok', res.filePath);
                }
            });
            // console.log(this.$store);
            //   await this.$store.dispatch('auth/test')
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
