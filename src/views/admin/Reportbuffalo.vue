<template> 
<div class="bg-gray-100"> 
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-card_file_box text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; รายงานจำนวนควาย</h2> 
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
             
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3"> 
                    <div class="bg-white border-b-4 border-orange-700 rounded shadow-xl p-2">
                        <div class="flex flex-col md:flex-row items-center">
                            <v-expansion-panels flat>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="font-bold "><div class="text-xl">ค้นหา</div> </v-expansion-panel-header>

                                    <v-expansion-panel-content>
                                        <div class="flex flex-row flex-wrap">
                                            <v-select outlined dense class="pa-1" :items="province" label="กรุณาเลือกจังหวัด" hide-details></v-select>
                                            <v-select outlined dense class="pa-1" :items="aumphur" label="กรุณาเลือกอำเภอ" hide-details></v-select>
                                            <v-select outlined dense class="pa-1" :items="tumbon" label="กรุณาเลือกตำบล" hide-details></v-select>
                                            <v-select outlined dense class="pa-1" :items="farm" label="กรุณาเลือกฟาร์ม" hide-details></v-select>
                                            <v-select outlined dense class="pa-1" :items="group" label="กรุณาเลือกกลุ่มเกษตกร" hide-details></v-select>
                                            <v-btn depressed class="ma-1 d-sm-block" color="blue"  @click="$router.push('/')" dense dark>
                                                <v-icon>mdi-magnify</v-icon>ค้นหา
                                            </v-btn> 
                                        </div> 
                                    </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels> 
                        </div>
                    </div> 

                    <div class="bg-white border-b-4 border-orange-700 rounded shadow-xl p-2 mt-6">
                        <v-card-title primary-title>
                            <h3 class="font-bold text-lg">ชื่อฟาร์ม :</h3>
                            <v-spacer></v-spacer>
                            <span class="font-bold text-lg  text-gray-600"> สวัสดิ์ฟาร์ม</span>
                        </v-card-title>
                        <v-card-title primary-title>
                            <h3 class="font-bold text-lg">กลุ่มเกษตกร :</h3>
                            <v-spacer></v-spacer>
                            <span class="font-bold text-lg  text-gray-600"> แม่ใจ</span>
                        </v-card-title>
                        <v-card-title primary-title>
                            <h3 class="font-bold text-lg">จังหวัด :</h3>
                            <v-spacer></v-spacer>
                            <span class="font-bold text-lg  text-gray-600"> พะเยา</span>
                        </v-card-title>
                        <v-card-title primary-title>
                            <h3 class="font-bold text-lg">อำเภอ :</h3>
                            <v-spacer></v-spacer>
                            <span class="font-bold text-lg  text-gray-600"> เมือง</span>
                        </v-card-title>
                        <v-card-title primary-title>
                            <h3 class="font-bold text-lg">ตำบล :</h3>
                            <v-spacer></v-spacer>
                            <span class="font-bold text-lg  text-gray-600"> แม่กา</span>
                        </v-card-title>
                        <v-card-title primary-title>
                            <h3 class="font-bold text-lg">จำนวนควายทั้งหมด :</h3>
                            <v-spacer></v-spacer>
                            <span class="font-bold text-lg  text-gray-600"> 30 ตัว</span>
                        </v-card-title>

                    </div> 
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
                    text: 'แดชบอร์ด',
                    disabled: false,
                    href: '/#/admin/home',
                },
                {
                    text: 'รายงานสรุปจำนวนควาย',
                    disabled: false,
                    href: '/#/admin/reportbuffalo',
                },
            ],
            province: ['พะเยา', 'น่าน'],
            aumphur: ['เมือง', 'แม่กา'],
            tumbon: ['แม่กา', 'แม่ใจ'],
            farm: ['พะเยา', 'น่าน'],
            group: ['กลุ่มแม่กา', 'กลุ่มแม่ใจ']
        }
    },
}
</script>
