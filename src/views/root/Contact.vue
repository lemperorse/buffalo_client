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
                <!-- <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2">
                    <v-expansion-panels flat>
                        <v-expansion-panel>
                            <v-expansion-panel-header>ติดต่อสอบสอบถาม</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-text-field value="เรื่อง" label="ชื่อเรื่อง" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                <v-textarea name="input-7-1" label="Default style" value="" hint="Hint text"></v-textarea>
                            </v-expansion-panel-content>

                        </v-expansion-panel>
                    </v-expansion-panels> -->
                <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2">
                    <v-card-title primary-title>
                        <h2 class="font-bold text-2xl">ติดต่อสอบสอบถาม</h2>
                    </v-card-title>
                    <v-card-text>
                        <div>
                            <v-expansion-panels v-model="panel" multiple flat>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ส่งเรื่องให้แอดมิน</h5>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-text-field value="เรื่อง" label="ชื่อเรื่อง" prepend-inner-icon="mdi-email-newsletter"></v-text-field>
                                        <v-textarea name="input-7-1" label="เนื้อหา" value="" prepend-inner-icon="mdi-card-text-outline"></v-textarea>
                                        <v-card-title>
                                            <v-spacer></v-spacer>
                                            <!-- <v-btn class="btnw50" depressed color="blue" dark>แก้ไข</v-btn> -->
                                            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                                ยืนยัน
                                            </button>
                                        </v-card-title>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ติดต่อลืมรหัสผ่าน</h5>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-text-field value="" label="เลขบัตรประชาชน" type="number" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                        <v-text-field value="" label="เบอร์โทรศัพท์" type="number" prepend-inner-icon="mdi-phone"></v-text-field>
                                        <v-card-title>
                                            <v-spacer></v-spacer>
                                            <!-- <v-btn class="btnw50" depressed color="blue" dark>แก้ไข</v-btn> -->
                                            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                                ยืนยัน
                                            </button>
                                        </v-card-title>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                            </v-expansion-panels>
                        </div>
                        <!-- <v-select   :items="prefix" value="นาย" label="คำนำหน้า" outlined prepend-inner-icon="mdi-human-male-female"></v-select>
                                        <v-text-field   value="นายแดง" label="ชื่อ" outlined prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                        <v-text-field   value="มีชัย" label="นามสกุล" outlined prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                        <v-select   :items="gender" value="ชาย" label="เพศ" outlined prepend-inner-icon="mdi-human-male-female"></v-select>
                                        <v-text-field   value="1231231231231" label="หมายเลขบัตรประชาชน" type="number" outlined prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                        <v-text-field   value="55" label="อายุ" outlined prepend-inner-icon="mdi-account-clock-outline"></v-text-field>
                                        <v-text-field   value="123/123" label="ที่อยู่" outlined prepend-inner-icon="mdi-home-map-marker"></v-text-field>
                                        <v-text-field   value="0123123123" label="เบอร์โทร" type="number" outlined prepend-inner-icon="mdi-phone"></v-text-field> -->
                    </v-card-text>

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
            panel: [0, 1, 2, 3],

        }
    },
}
</script>

<style scoped>
.btnw50 {
    width: 50%;
}
</style>
