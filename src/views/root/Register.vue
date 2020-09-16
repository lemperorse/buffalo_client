<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="container w-full mx-auto">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <v-btn color="white" depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>กลับ
            </v-btn>
            <h2 class="font-bold text-2xl mb-2">สมัครสมาชิก</h2> 
            <hr class="border-b-2 border-gray-400 ">
        </v-container>
        <!--Console Content-->
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-3">
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

                            <v-btn color="primary" @click="e1 = 2">
                                Continue
                            </v-btn>

                            <v-btn text>Cancel</v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-text-field label="ชื่อ" prepend-inner-icon="mdi-account" type="text"></v-text-field>
                            <v-text-field label="นามสกุล" prepend-inner-icon="mdi-account"></v-text-field> 
                            <v-text-field label="บ้านเลขที่" prepend-inner-icon="mdi-home-edit" type="text"></v-text-field>
                            <v-text-field label="หมู่บ้าน" prepend-inner-icon="mdi-home-group" type="text"></v-text-field>
                            <v-text-field label="ตำบล" prepend-inner-icon="mdi-pin" type="text"></v-text-field>
                            <v-text-field label="อำเภอ" prepend-inner-icon="mdi-pin" type="text"></v-text-field>
                            <v-text-field label="จังหวัด" prepend-inner-icon="mdi-pin" type="text"></v-text-field>

                            <v-btn color="primary" @click="e1 = 1">
                                Continue
                            </v-btn>

                            <v-btn text @click="e1 = 1">Cancel</v-btn>
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
            e1: 1,
        }
    },
}
</script>
