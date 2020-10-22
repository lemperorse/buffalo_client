<template>
<div class="bg-gray-100">
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-male-farmer text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; จัดการเกษตกร</h2>
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 mb-3 md:p-3">
                    <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-3">
                        <div v-if="e1 == 2" class="  w-full mx-auto">
                            <form @submit.prevent="e1 =3">
                                <div class="flex flex-col h-full w-full justify-center items-center  ">
                                    <v-text-field required class="w-full" v-model="formProfile.personal_id" label="รหัสบัตรประจำตัว 13 หลัก" prepend-inner-icon="mdi-account" type="text"></v-text-field>

                                    <v-select required class="w-full" v-model="formProfile.prefix" :items="prefixes" item-value="id" item-text="value" label="คำนำหน้า"></v-select>
                                    <v-text-field required class="w-full" v-model="formUser.first_name" label="ชื่อ" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                                    <v-text-field required class="w-full" v-model="formUser.last_name" label="นามสกุล" prepend-inner-icon="mdi-account"></v-text-field>
                                    <v-select required class="w-full" v-model="formProfile.gender" :items="genders" item-value="id" item-text="value" label="เพศ"></v-select>
                                    <br>
                                    <v-toolbar flat class="w-full" color="transparent">
                                        <v-spacer></v-spacer>
                                        <v-btn type="submit" large color="primary">ถัดไป</v-btn>
                                    </v-toolbar>
                                </div>
                            </form>
                        </div>

                        <div v-if="e1 == 3" class="  w-full mx-auto">
                            <form @submit.prevent="e1 =4">
                                <div class="flex flex-col h-full w-full justify-center items-center  ">
                                    <v-date-picker v-model="formProfile.birthday"></v-date-picker>
                                    <v-text-field required class="w-full" v-model="formProfile.age" label="อายุ (ปี)" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                                    <v-toolbar flat class="w-full" color="transparent">
                                        <v-spacer></v-spacer>
                                        <v-btn type="submit" large color="primary">ถัดไป</v-btn>
                                    </v-toolbar>
                                </div>
                            </form>
                        </div>

                        <div v-if="e1 == 4" class="  w-full mx-auto">
                            <form @submit.prevent="e1 =5">
                                <div class="flex flex-col h-full w-full justify-center items-center  ">
                                    <v-text-field class="w-full" label="บ้านเลขที่" v-model="formProfile.address" prepend-inner-icon="mdi-home-edit" type="text"></v-text-field>
                                    <v-text-field class="w-full" label="หมู่บ้าน" v-model="formProfile.mooban" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                                    <v-autocomplete class="w-full" v-model="formProfile.geo" item-value="id" :items="geos" color="white" item-text="name" label="ภูมิภาค"></v-autocomplete>
                                    <v-autocomplete class="w-full" v-model="formProfile.province" item-value="id" :items="provinces" color="white" item-text="name" label="จังหวัด"></v-autocomplete>
                                    <v-autocomplete class="w-full" v-model="formProfile.amphur" item-value="id" :items="amphurs" color="white" item-text="name" label="อำเภอ"></v-autocomplete>
                                    <v-autocomplete class="w-full" v-model="formProfile.district" item-value="id" :items="districts" color="white" item-text="name" label="ตำบล"></v-autocomplete>
                                    <v-text-field class="w-full" v-model="formProfile.zipcode" label="รหัสไปรศณีย์" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                                    <v-text-field class="w-full" v-model="formProfile.tel" label="เบอร์โทร" prepend-inner-icon="mdi-postage-stamp" type="text"></v-text-field>

                                    <v-toolbar flat class="w-full" color="transparent">
                                        <v-spacer></v-spacer>
                                        <v-btn type="submit" large color="primary">ถัดไป</v-btn>
                                    </v-toolbar>
                                </div>
                            </form>
                        </div>

                        <div v-if="e1 == 5" class="container w-full mx-auto">
                            <form @submit.prevent="prepareRegister()">
                                <div class="flex flex-col h-full w-full justify-center items-center  ">
                                    <h2><b> โปรดระบุข้อมูลในการเข้าสู่ระบบ</b></h2><br>
                                    <v-text-field class="w-full" label="ชื่อผู้ใช้" v-model="formUser.username" prepend-inner-icon="mdi-home-edit" type="text"></v-text-field>
                                    <v-text-field class="w-full" label="รหัสผ่าน" v-model="formUser.password" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                                    <v-text-field class="w-full" label="ยืนยันรหัสผ่าน" v-model="formUser.password2" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                                    <v-btn type="submit" large class="w-full" color="success">ยืนยันการสมัครสมาชิก</v-btn>
                                </div>
                            </form>
                        </div>
                        <div v-if="e1 == 6" class="container w-full mx-auto">
                            <div class="pa-4">
                                <center><img style="height:250px; weight:auto;" src="https://sv1.picz.in.th/images/2020/10/19/bz46nn.png" alt=""></center>
                            </div>
                            <div class="flex flex-col justify-center items-center ">
                                <v-card class="w-full" flat>
                                    <v-card-text>
                                        <center>
                                            <h2 class="text-xl text-green-600"><b> สมัครสมาชิกสำเร็จแล้ว</b></h2>
                                        </center>
                                        <center>
                                            <p>คุณสามมารถเข้าสู่ระบบด้วย</p>
                                        </center>
                                        <p class="text-xl"> <br><b>ชื่อผู้ใช้ {{formUser.username}}</b> <br> <br> <b>รหัสผ่าน {{formUser.password}} </b> </p><br>
                                        <v-btn outlined v-if="dialog" @click="captureImage()" large class="w-full" color="primary">บันทึกเป็นรูปภาพ</v-btn>

                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn v-if="dialog" @click="$router.push('/')" large class="w-full" color="success">กลับไปหน้า เข้่าสู่ระบบ</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
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
                first_name: "",
                last_name: "",
                password: "",
                password2: "",
                username: ""
            },
            formProfile: {
                "address": "",
                "mooban": "",
                "zipcode": "",
                "tel": "",
                "birthday": null,
                "age": null,
                "personal_id": "",
                "user": null,
                "geo": null,
                "amphur": null,
                "district": null,
                "province": null,
                "prefix": null,
                "gender": null
            },
            e1: 2,
            geos: [],
            provinces: [],
            amphurs: [],
            districts: [],
            prefixes: [],
            genders: [],
            dialog: true,
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
    computed: {
        ...sync('auth/*')
    },

    methods: {
        ...call('core/*'),
        ...sync('auth/*'),
        async prepareRegister() {
            let user = await this.$store.dispatch('auth/registerUser', this.formUser);
            if (user.id) {
                this.formProfile.user = user.id
                let registerProfile = await this.$store.dispatch('auth/registerProfile', this.formProfile);
            }
        },
        async captureImage() {
            this.dialog = false
            await navigator.screenshot.URI(async (error, res) => {
                if (error) {
                    console.error(error);
                } else {
                    alert(JSON.stringify(res))
                    var myBaseString = res.URI

                    var params = {
                        data: myBaseString,
                        prefix: 'myPrefix_',
                        format: 'JPG',
                        quality: 80,
                        mediaScanner: true
                    };
                    await window.imageSaver.saveBase64Image(params,
                        function (filePath) {
                            alert(filePath);
                            console.log('File saved on ' + filePath);
                        },
                        function (msg) {
                            alert('error');
                            console.error(msg);
                        }
                    );
                }
            }, 50);
            this.dialog = true
        },
        async load() {

            this.geos = await this.$store.dispatch('core/getGeo')
            this.prefixes = await this.$store.dispatch('core/getChoice', 'คำนำหน้า')
            this.genders = await this.$store.dispatch('core/getChoice', 'เพศ')
        }
    }
};
</script>
