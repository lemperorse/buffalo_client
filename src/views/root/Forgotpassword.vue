<template> 
<div class="container w-full mx-auto">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <v-btn color="white" depressed fab @click="$router.go(-1)" small>
                <v-icon class="icon">mdi-chevron-left</v-icon>กลับ
            </v-btn>
            <h2 class="font-bold text-2xl mb-2">ลืมรหัสผ่าน</h2>
            <hr class="border-b-2 border-gray-400 ">
        </v-container>
        
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-3"> 
                <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2">
                    <v-card-title primary-title>
                        กรอกข้อมูล
                    </v-card-title>
                    <v-divider class="px-10"></v-divider>
                    <v-card-text>
                        <v-text-field value="" label="เลขบัตรประชาชน" type="number" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                        <v-text-field value="" label="เบอร์โทรศัพท์" type="number" prepend-inner-icon="mdi-phone"></v-text-field>
                    </v-card-text>

                    <v-card-title>
                    <v-spacer></v-spacer> 
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        ยืนยัน
                    </button>
                </v-card-title> 
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

        }
    },
}
</script>

<style scoped>
.btnw50 {
    width: 50%;
}
</style>
