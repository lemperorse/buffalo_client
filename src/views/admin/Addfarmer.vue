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
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-10">
                        <v-select :items="prefix" prepend-inner-icon="mdi-card-account-details-outline" label="คำนำหน้า "></v-select>
                        <v-text-field prepend-inner-icon="mdi-card-account-details-outline" label="ชื่อ "></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-card-account-details-outline" label="นามสกุล"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-id-card" type="number" label="หมายเลขบัตรประชาชน"></v-text-field>
                        <v-file-input chips prepend-inner-icon="" accept="image/*" label="ภาพถ่ายบัตรประจำตัวประชาชน"></v-file-input>
                        <v-select :items="gender" prepend-inner-icon="mdi-human-male-female" label="เพศ"></v-select>
                        <v-text-field prepend-inner-icon="mdi-account-clock-outline" type="number" label="อายุ"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-home" label="ที่อยู่"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-phone" type="number" label="เบอร์โทรศัพท์"></v-text-field>
                        <v-file-input chips prepend-inner-icon="" accept="image/*" label="ภาพถ่ายเจ้าของฟาร์ม"></v-file-input>
                        <v-file-input chips prepend-inner-icon="" accept="image/*" label="ภาพถ่ายสภาพฟาร์ม"></v-file-input>
                        <v-text-field prepend-inner-icon="mdi-home-outline" label="ชื่อฟาร์ม"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-home" label="ที่อยู่ฟาร์ม"></v-text-field>
                        <v-select :items="tumbon" prepend-inner-icon="mdi-map-marker-multiple-outline" label="ตำบล"></v-select>
                        <v-select :items="aumphur" prepend-inner-icon="mdi-map-marker-multiple-outline" label="อำเภอ"></v-select>
                        <v-select :items="province" prepend-inner-icon="mdi-map-marker-multiple-outline" label="จังหวัด"></v-select>
                        <v-select :items="postalcode" prepend-inner-icon="mdi-postage-stamp" label="รหัสไปรษณีย์"></v-select>
                        <v-text-field prepend-inner-icon="mdi-map-marker-radius-outline" label="พิกัดฟาร์มตามระบบ GPS (ละติจูด)"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-map-marker-radius-outline" label="พิกัดฟาร์มตามระบบ GPS (ลองติจูด)"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-cow" type="number" label="จำนวนกระบือทั้งหมด"></v-text-field>
                        <v-select :items="group" prepend-inner-icon="mdi-account-group-outline" label="กลุ่มเกษตรกร"></v-select>
                        <!-- <v-card-title primary-title>
                            <v-spacer></v-spacer> -->
                             <!-- <v-btn depressed tile class="mt-2" @click="$router.push('/admin/allfarmer')" block medium color="success">บันทึก</v-btn> -->
                            <!-- <v-btn @click="$router.push('/admin/allfarmer')" class="btnw50" color="success">บันทึก</v-btn> -->
                        <!-- </v-card-title> -->
                        <v-btn depressed class="mt-2" @click="$router.push('/admin/allfarmer')" block medium color="success">บันทึก</v-btn>
                    </div>
                    <!--/Metric Card-->
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
