<template>
<div class="container w-full mx-auto">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <v-btn color="white" depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>กลับ
            </v-btn>
            <h2 class="font-bold text-2xl mb-2">สมัครสมาชิก</h2>
            <hr class="border-b-2 border-gray-400" />
        </v-container>

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
</template>

<script>
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
            e1: 1,
        };
    },
};
</script>
