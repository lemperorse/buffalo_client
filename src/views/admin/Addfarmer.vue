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
