<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="bg-gray-100">
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-water_buffalo text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; เพิ่มอายุควาย</h2>
                <!-- <h2 class="font-bold text-2xl">เพิ่มอายุ</h2> -->
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
            <!--Console Content-->
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0  md:p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-blue-500  rounded shadow-xl p-4">
                        <v-text-field value="" prepend-inner-icon="mdi-weight-kilogram"   type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                        <v-text-field value="" prepend-inner-icon="mdi-arrow-left-right"   type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                        <v-text-field value="" prepend-inner-icon="mdi-arrow-left-right"   type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                        <v-text-field value="" prepend-inner-icon="mdi-human-male-height-variant"   type="number" label="ความสูง(เซนติเมตร)"></v-text-field>
                        <v-select :items="age1" value="" prepend-inner-icon="mdi-clock"   label="อายุ(240,400,600วัน)"></v-select>
                        <!-- <v-card-title primary-title> -->
                            <!-- <v-spacer></v-spacer> -->
                            <v-btn depressed tile block medium class="mt-2" @click="$router.push('/admin/buffalo')" color="success">บันทึก</v-btn>
                        <!-- </v-card-title> -->
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
                    text: 'ข้อมูลเกษตกร',
                    disabled: false,
                    href: '/#/admin/farmer',
                },
                {
                    text: 'ข้อมูลควาย',
                    disabled: false,
                    href: '/#/admin/buffalo'
                },
                {
                    text: 'เพิ่มอายุ',
                    disabled: false,
                    href: '/#/admin/addage'
                },
            ],
            age1: ['240', '400', '600'],

        }
    },
}
</script>

<style scoped>
.btnw50 {
    width: 50%;
}
</style>
