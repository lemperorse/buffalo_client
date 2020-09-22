<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="bg-gray-100">
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-male-farmer text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; เพิ่มเกษตกร</h2>
                <!-- <h2 class="font-bold text-2xl">เพิ่มเกษตกร</h2> -->
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
            <!--Console Content-->
            <!-- <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                    <div class="bg-white border-b-4 border-green-500 rounded shadow-xl">
                        <v-stepper v-model="e1">
                            <v-stepper-header>
                                <v-stepper-step :complete="e1 > 1" step="1">เกี่ยวกับเกษตกร</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 2" step="2">ติดต่อและที่อยู่</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 3" step="3">เกี่ยวกับฟาร์ม</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 4" step="4">ที่อยู่ฟาร์ม</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 5" step="5">พิกัด GPS</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 6" step="6">รูปภาพบัตรประชาชนและรูปภาพฟาร์ม</v-stepper-step>
                            </v-stepper-header>

                            <v-stepper-items>
                                <v-stepper-content step="1">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">เกี่ยวกับเกษตกร</div>
                                    </v-card-title>
                                    <v-select :items="prefix" value="นาย" label="คำนำหน้า" prepend-inner-icon="mdi-human-male-female"></v-select>
                                    <v-text-field value="นายแดง" label="ชื่อ" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                    <v-text-field value="มีชัย" label="นามสกุล" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                    <v-select :items="gender" value="ชาย" label="เพศ" prepend-inner-icon="mdi-human-male-female"></v-select>
                                    <v-text-field value="1231231231231" label="หมายเลขบัตรประชาชน" type="number" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                    <v-text-field value="55" label="อายุ" prepend-inner-icon="mdi-account-clock-outline"></v-text-field>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text>ยกเลิก</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 2">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>

                                </v-stepper-content>

                                <v-stepper-content step="2">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">ติดต่อและที่อยู่</div>
                                    </v-card-title>
                                    <v-text-field value="123/123" label="ที่อยู่" prepend-inner-icon="mdi-home-map-marker"></v-text-field>
                                    <v-text-field value="0123123123" label="เบอร์โทร" type="number" prepend-inner-icon="mdi-phone"></v-text-field>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 1">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 3">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                                <v-stepper-content step="3">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">เกี่ยวกับฟาร์ม</div>
                                    </v-card-title>
                                    <v-text-field value="ฟาร์มนายแดง" prepend-inner-icon="mdi-home-outline" label="ชื่อฟาร์ม"></v-text-field>
                                    <v-text-field value="12 ตัว" prepend-inner-icon="mdi-cow" type="number" label="จำนวนควายทั้งหมด"></v-text-field>
                                    <v-select :items="group" value="กลุ่มแม่กา" prepend-inner-icon="mdi-account-group-outline" label="กลุ่มเกษตกร"></v-select>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 2">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 4">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                                <v-stepper-content step="4">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">ที่อยู่ฟาร์ม</div>
                                    </v-card-title>
                                    <v-text-field value="111 ต.แม่กา" prepend-inner-icon="mdi-home" label="​ที่อยู่ฟาร์ม"></v-text-field>
                                    <v-select :items="tumbon" value="แม่กา" prepend-inner-icon="mdi-map-marker-multiple" label="ตำบล"></v-select>
                                    <v-select :items="aumphur" value="แม่กา" prepend-inner-icon="mdi-map-marker-multiple" label="อำเภอ"></v-select>
                                    <v-select :items="province" value="พะเยา" prepend-inner-icon="mdi-map-marker-multiple" label="จังหวัด"></v-select>
                                    <v-select :items="postalcode" value="56000" prepend-inner-icon="mdi-postage-stamp" label="รหัสไปรษณีย์"></v-select>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 3">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 5">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                                <v-stepper-content step="5">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">พิกัด GPS</div>
                                    </v-card-title>
                                    <v-text-field value="1231231231" prepend-inner-icon="mdi-map-marker-multiple-outline" label="พิกัดฟาร์มตามระบบ GPS (ละติจูด)"></v-text-field>
                                    <v-text-field value="123123123" prepend-inner-icon="mdi-map-marker-multiple-outline" label="พิกัดฟาร์มตามระบบ GPS (ลองติจูด)"></v-text-field>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 4">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 6">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                                <v-stepper-content step="6">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">รูปภาพบัตรประชาชนและรูปภาพฟาร์ม</div>
                                    </v-card-title>
                                    <h5 class="font-bold uppercase text-gray-700 text-xl ml-6">อัพโหลดภาพถ่ายเจ้าของฟาร์ม</h5>
                                    <v-card-title class="black--text white darken-4 d-flex">
                                        <v-divider vertical inset class="mx-1" dark></v-divider> 
                                        <v-btn depressed block :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                        </v-btn>
                                    </v-card-title>
                                    <h5 class="font-bold uppercase text-gray-700 text-xl ml-6">อัพโหลดภาพถ่ายบัตรประชาชน</h5>
                                    <v-card-title class="black--text white darken-4 d-flex">
                                        <v-divider vertical inset class="mx-1" dark></v-divider> 
                                        <v-btn depressed block :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                        </v-btn>
                                    </v-card-title>
                                    <h5 class="font-bold uppercase text-gray-700 text-xl ml-6">อัพโหลดภาพถ่ายฟาร์ม</h5>
                                    <v-card-title class="black--text white darken-4 d-flex">
                                        <v-divider vertical inset class="mx-1" dark></v-divider> 
                                        <v-btn depressed block :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                        </v-btn>
                                    </v-card-title>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 5">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 1">
                                            ยืนยัน
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                            </v-stepper-items>
                        </v-stepper>
                    </div>
                </div>
            </div> -->

            <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">ชื่อผู้ใช้งาน</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">ข้อมูลส่วนตัว</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-text-field label="ชื่อผู้ใช้งาน" placeholder="ชื่อผู้ใช้งาน" prepend-inner-icon="mdi-account-star"></v-text-field>
                            <v-text-field label="รหัสผ่าน" placeholder="รหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                            <v-text-field label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                            <v-card-title primary-title>
                                <v-spacer></v-spacer>
                                <v-btn text>ยกเลิก</v-btn>
                                <v-btn depressed color="primary" @click="e1 = 2">
                                    ต่อไป
                                </v-btn>
                            </v-card-title>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-text-field label="ชื่อ" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                            <v-text-field label="นามสกุล" prepend-inner-icon="mdi-account"></v-text-field>
                            <v-text-field label="บ้านเลขที่" prepend-inner-icon="mdi-home-edit" type="text"></v-text-field>
                            <v-text-field label="หมู่บ้าน" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                            <v-text-field label="ตำบล" prepend-inner-icon="mdi-pin" type="text"></v-text-field>
                            <v-text-field label="อำเภอ" prepend-inner-icon="mdi-pin" type="text"></v-text-field>
                            <v-text-field label="จังหวัด" prepend-inner-icon="mdi-pin" type="text"></v-text-field>
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
        </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            e1: 1,
            bc: [{
                    text: 'เกษตกร',
                    disabled: false,
                    href: '/#/admin/allfarmer',
                },
                {
                    text: 'เพิ่มเกษตกร',
                    disabled: false,
                    href: '/#/admin/addfarmer',
                },
            ],

            prefix: ['นาย', 'นาง', 'นางสาว'],
            gender: ['ชาย', 'หญิง'],
            tumbon: ['แม่กา', 'แม่ใจ'],
            aumphur: ['แม่กา', 'แม่ใจ'],
            province: ['พะเยา', 'น่าน'],
            postalcode: ['56000', '56100'],
            group: ['แม่กา', 'แม่ใจ'],

        }
    },
}
</script>

<style scoped>
.btnw50 {
    width: 50%;
}
</style>
