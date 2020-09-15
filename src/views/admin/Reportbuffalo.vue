<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div>
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <!--Console Content-->
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-col md:flex-row items-center">
                            <v-select outlined color="success" :items="province" label="กรุณาเลือกจังหวัด" hide-details></v-select>
                            <v-divider vertical class="m-1"></v-divider>
                            <v-select outlined color="success" :items="aumphur" label="กรุณาเลือกอำเภอ" hide-details></v-select>
                            <v-divider vertical class="m-1"></v-divider>
                            <v-select outlined color="success" :items="tumbon" label="กรุณาเลือกตำบล" hide-details></v-select>
                            <v-divider vertical class="m-1"></v-divider>
                            <v-select outlined color="success" :items="farm" label="กรุณาเลือกฟาร์ม" hide-details></v-select>
                        </div>
                    </div>
                    <!--/Metric Card-->

                    <v-card class="mt-6">
                        <div class="flex flex-row items-center m-3">
                            <h3 class="font-bold text-1xl">ชื่อฟาร์ม :</h3> <span class="font-bold text-1xl  text-gray-500"> สวัสดิ์ฟาร์ม</span>
                        </div>
                        <div class="flex flex-row items-center m-3">
                            <h4 class="font-bold text-1xl">กลุ่มเกษตกร : </h4 ><span class="font-bold text-1xl  text-gray-500"> แม่ใจ</span>
                        </div>
                        <div class="flex flex-row items-center m-3">
                            <h4 class="font-bold text-1xl">จังหวัด : </h4><span class="font-bold text-1xl  text-gray-500"> พะเยา</span>
                        </div>
                        <div class="flex flex-row items-center m-3">
                            <h4 class="font-bold text-1xl">อำเภอ : </h4><span class="font-bold text-1xl  text-gray-500"> เมือง</span>
                        </div>
                        <div class="flex flex-row items-center m-3">
                            <h4 class="font-bold text-1xl">ตำบล : </h4><span class="font-bold text-1xl  text-gray-500"> แม่กา</span>
                        </div>
                        <div class="flex flex-row items-center m-3">
                            <h4 class="font-bold text-1xl">จำนวนควายทั้งหมด : </h4><span class="font-bold text-1xl  text-gray-500"> 30 ตัว</span>
                        </div>
                    </v-card>
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
            province: ['พะเยา', 'น่าน'],
            aumphur: ['เมือง', 'แม่กา'],
            tumbon: ['แม่กา', 'แม่ใจ'],
            farm: ['พะเยา', 'น่าน']
        }
    },
}
</script>
