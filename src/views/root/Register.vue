<template>
<div>
    <v-toolbar color="white">
        <v-btn color="white" depressed fab @click="$router.go(-1)" small>
            <v-icon class="icon">mdi-arrow-left</v-icon>
        </v-btn> <b>สมัครสมาชิก</b>
    </v-toolbar>

    <div v-if="e1 == 0" class="container w-full mx-auto">
        <div class="pa-4">
            <img src="https://sv1.picz.in.th/images/2020/10/19/bYlZuI.png" alt="">
        </div>

        <div class="flex flex-col justify-center items-center p-6">
            <h2 class="text-xl"><b> เข้าร่วม พันธ์ุประวัติ</b></h2>
            <p>เราจะช่วยคุณสร้างบัญชีใหม่ด้วยขั้นตอนง่ายๆ ไม่กี่ขั้นตอน</p><br>
            <v-btn @click="e1 = 1" large class="w-full" color="primary">ถัดไป</v-btn>
        </div>
    </div>
    <div v-if="e1 == 1" class="container w-full mx-auto">
        <form @submit.prevent="e1 =2">
            <div class="flex flex-col h-full w-full justify-center items-center  p-6 ">
                <h2><b> โปรดระบุรหัสบัตรประจำตัวประชาชน</b></h2><br>
                <v-text-field required class="w-full" v-model="formProfile.personal_id" label="รหัสบัตรประจำตัว 13 หลัก" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                <v-btn type="submit" large class="w-full" color="primary">ถัดไป</v-btn>
            </div>
        </form>
    </div>
    <div v-if="e1 == 2" class="container w-full mx-auto">
        <form @submit.prevent="e1 =3">
            <div class="flex flex-col h-full w-full justify-center items-center  p-6 ">
                <h2><b> โปรดระบุชื่อของคุณ</b></h2><br>
                <v-select required class="w-full" v-model="formUser.prefix" :items="prefixes" item-value="id" item-text="value" label="คำนำหน้า"></v-select>
                <v-text-field required class="w-full" v-model="formUser.first_name" label="ชื่อ" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                <v-text-field required class="w-full" v-model="formUser.last_name" label="นามสกุล" prepend-inner-icon="mdi-account"></v-text-field>
                <v-select required class="w-full" v-model="formProfile.gender" :items="genders" item-value="id" item-text="value" label="เพศ"></v-select>
                <br>
                <v-btn type="submit" large class="w-full" color="primary">ถัดไป</v-btn>
            </div>
        </form>
    </div>

    <div v-if="e1 == 3" class="container w-full mx-auto">
        <form @submit.prevent="e1 =4">
            <div class="flex flex-col h-full w-full justify-center items-center  p-6 ">
                <h2><b> โปรดระบุวันเกิดของคุณ</b></h2><br>
                <v-date-picker v-model="formProfile.birthday"></v-date-picker>
                <v-text-field required class="w-full" v-model="formProfile.age" label="อายุ (ปี)" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                <v-btn type="submit" large class="w-full" color="primary">ถัดไป</v-btn>
            </div>
        </form>
    </div>

    <div v-if="e1 == 4" class="container w-full mx-auto">
        <form @submit.prevent="e1 =5">
            <div class="flex flex-col h-full w-full justify-center items-center  p-6 ">
                <h2><b> โปรดระบุที่อยู่ของคุณ</b></h2><br>
                <v-text-field class="w-full" label="บ้านเลขที่" v-model="formProfile.address" prepend-inner-icon="mdi-home-edit" type="text"></v-text-field>
                <v-text-field class="w-full" label="หมู่บ้าน" v-model="formProfile.mooban" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                <v-autocomplete class="w-full" v-model="formProfile.geo" item-value="id" :items="geos" color="white" item-text="name" label="ภูมิภาค"></v-autocomplete>
                <v-autocomplete class="w-full" v-model="formProfile.province" item-value="id" :items="provinces" color="white" item-text="name" label="จังหวัด"></v-autocomplete>
                <v-autocomplete class="w-full" v-model="formProfile.amphur" item-value="id" :items="amphurs" color="white" item-text="name" label="อำเภอ"></v-autocomplete>
                <v-autocomplete class="w-full" v-model="formProfile.district" item-value="id" :items="districts" color="white" item-text="name" label="ตำบล"></v-autocomplete>
                <v-text-field class="w-full" v-model="formProfile.zipcode" label="รหัสไปรศณีย์" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                <v-btn type="submit" large class="w-full" color="primary">ถัดไป</v-btn>
            </div>
        </form>
    </div>

    <div v-if="e1 == 5" class="container w-full mx-auto">
        <form @submit.prevent="e1 =5">
            <div class="flex flex-col h-full w-full justify-center items-center  p-6 ">
                <h2><b> โปรดระบุข้อมูลในการเข้าสู่ระบบ</b></h2><br>
                <v-text-field class="w-full" label="ชื่อผู้ใช้" v-model="formProfile.address" prepend-inner-icon="mdi-home-edit" type="text"></v-text-field>
                <v-text-field class="w-full" label="รหัสผ่าน" v-model="formProfile.mooban" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                <v-text-field class="w-full" label="ยืนยันรหัสผ่าน" v-model="formProfile.mooban" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                <v-btn type="submit" large class="w-full" color="success">ยืนยันการสมัครสมาชิก</v-btn>
            </div>
        </form>
    </div>

    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <!-- <v-container>
            >
            <h2 class="font-bold text-2xl mb-2">สมัครสมาชิก</h2>
            <hr class="border-b-2 border-gray-400" />
        </v-container> -->

        <!-- <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">ชื่อผู้ใช้งาน</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">ข้อมูลส่วนตัว</v-stepper-s tep>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-text-field v-model="formUser.first_name" label="ชื่อ" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                            <v-text-field v-model="formUser.last_name" label="นามสกุล" prepend-inner-icon="mdi-account"></v-text-field>
                            <v-text-field v-model="formUser.username" label="ชื่อผู้ใช้งาน" placeholder="ชื่อผู้ใช้งาน" prepend-inner-icon="mdi-account-star"></v-text-field>
                            <v-text-field v-model="formUser.password" label="รหัสผ่าน" placeholder="รหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                            <v-text-field v-model="formUser.password2" label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                            <v-card-title primary-title>
                                <v-spacer></v-spacer>
                                <v-btn text>ยกเลิก</v-btn>
                                <v-btn depressed color="primary" @click="e1 = 2">
                                    ต่อไป
                                </v-btn>
                            </v-card-title>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-text-field label="บ้านเลขที่" prepend-inner-icon="mdi-home-edit" type="text"></v-text-field>
                            <v-text-field label="หมู่บ้าน" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                            <v-autocomplete v-model="formProfile.geo" item-value="id" :items="geos" color="white" item-text="name" label="ภูมิภาค"></v-autocomplete>
                            <v-autocomplete v-model="formProfile.province" item-value="id" :items="provinces" color="white" item-text="name" label="จังหวัด"></v-autocomplete>
                            <v-autocomplete v-model="formProfile.amphur" item-value="id" :items="amphurs" color="white" item-text="name" label="อำเภอ"></v-autocomplete>
                            <v-autocomplete v-model="formProfile.district" item-value="id" :items="districts" color="white" item-text="name" label="ตำบล"></v-autocomplete>

                            <v-text-field label="รหัสไปรษณีย์" prepend-inner-icon="mdi-postage-stamp" type="number"></v-text-field>

                            <v-card-title primary-title>
                                <v-spacer></v-spacer>
                                <v-btn text @click="e1 = 1">ยกเลิก</v-btn>
                                <v-btn depressed color="primary" @click="e1 = 1">
                                    ต่อไป
                                </v-btn>
                            </v-card-title>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
import {
    sync,
    call
} from 'vuex-pathify';
import moment from 'moment';
export default {
    data() {
        return {
            formUser: {
                username: "",
                first_name: "",
                last_name: "",
                password: "",
                password2: "",
            },
            formProfile: {
                "address": "",
                "mooban": "",
                "zipcode": "",
                "tel": "",
                "birthday": null,
                "age": null,
                "personal_id": "",
                "profile_image": null,
                "presonal_image": null,
                "user": null,
                "geo": null,
                "amphur": null,
                "district": null,
                "province": null,
                "prefix": null,
                "gender": null
            },
            e1: 0,
            geos: [],
            provinces: [],
            amphurs: [],
            districts: [],
            prefixes: [],
            genders: [],
        };
    },
    watch: {
        "formProfile.geo": async function (val) {
            this.provinces = await this.$store.dispatch('core/getProvince', `?geo=${val}`)
        },
        "formProfile.province": async function (val) {
            this.amphurs = await this.$store.dispatch('core/getAmphur', `?province=${val}`)
        },
        "formProfile.amphur": async function (val) {
            this.districts = await this.$store.dispatch('core/getDistrict', `?amphur=${val}`)
        },
        "formProfile.birthday": async function (val) {
            this.formProfile.age = moment().diff(val, 'years', false);

        }
    },
    async mounted() {
        await this.load();
    },
    computed: {},
    methods: {
        async load() {
            console.log(process.env.VUE_APP_URL)
            this.geos = await this.$store.dispatch('core/getGeo')
            this.prefixes = await this.$store.dispatch('core/getChoice', 'คำนำหน้า')
            this.genders = await this.$store.dispatch('core/getChoice', 'เพศ')
        }
    }
};
</script>
