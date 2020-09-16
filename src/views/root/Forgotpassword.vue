<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="container w-full mx-auto">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <v-btn color="white" depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>กลับ
            </v-btn>
            <h2 class="font-bold text-2xl mb-2">ลืมรหัสผ่าน</h2>
            <hr class="border-b-2 border-gray-400 ">
        </v-container>
        <!--Console Content-->
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                <v-card>
                    <v-card-title primary-title>
                        กรอกข้อมูล
                    </v-card-title>
                    <v-divider class="px-10"></v-divider>
                    <v-card-text>
                        <v-text-field value="" label="เลขบัตรประชาชน" type="number"></v-text-field>
                        <v-text-field value="" label="เบอร์โทรศัพท์" type="number"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="btnw50" color="success">ยืนยัน</v-btn>
                    </v-card-actions>
                </v-card>
                <!-- <v-stepper >
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">ลืมรหัสผ่าน</v-stepper-step> 
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-text-field label="ชื่อผู้ใช้งาน" placeholder="ชื่อผู้ใช้งาน" prepend-inner-icon="mdi-account-star"></v-text-field>
                            <v-text-field label="รหัสผ่าน" placeholder="รหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                            <v-text-field label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>

                            <v-btn color="primary" block>
                                ยืนยัน
                            </v-btn>

                        </v-stepper-content> 

                    </v-stepper-items>
                </v-stepper> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.btnw50{
    width:50%;
} 
</style>
