<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="bg-gray-100">
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-water_buffalo text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; เพิ่มควาย</h2>
                <!-- <h2 class="font-bold text-2xl">เพิ่มควาย</h2> -->
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
            <!--Console Content-->
            <div class="flex flex-wrap ">
                <div class="w-full md:w-1/2 xl:w-1/2 p-0 mb-2 md:p-3">
                    <!-- <v-card> -->
                    <div class="bg-white border-b-4 border-blue-500  rounded shadow-xl p-2">
                        <v-card-title primary-title>
                            ภาพถ่ายด้านหน้า
                            <v-spacer></v-spacer>
                            <v-btn depressed   :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                <v-icon>mdi-cloud-upload</v-icon>อัพโหลดรูปภาพ
                            </v-btn>
                        </v-card-title>

                        <v-divider class="px-1"></v-divider>
                        <v-card-text>
                            <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                        </v-card-text>
                    </div>
                    <!-- </v-card> -->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/2 p-0 mb-2 md:p-3">
                    <!-- <v-card> -->
                    <div class="bg-white border-b-4 border-blue-500  rounded shadow-xl p-2">
                        <v-card-title primary-title>
                            ภาพถ่ายด้านข้าง
                            <v-spacer></v-spacer>
                            <v-btn depressed   :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                <v-icon>mdi-cloud-upload</v-icon>อัพโหลดรูปภาพ
                            </v-btn>
                        </v-card-title>
                        <v-divider class="px-1"></v-divider>
                        <v-card-text>
                            <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                        </v-card-text>
                        <!-- </v-card> -->
                    </div>
                </div>

                <div class="w-full md:w-1/2 xl:w-1/2 p-0 mb-2 md:p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <v-avatar @click="$router.push('/user/addbuffalo')" color="orange" size="80">
                                    <v-icon dark large class="elevation-1 rounded error ">mdi-file-pdf-outline</v-icon>
                                </v-avatar>
                            </div>
                            <div class="flex-1 text-right md:text-center border-b-1 border-green-600">
                                <h5 class="font-bold uppercase text-xl">ใบพันธุ์ประวัติอ้างอิง</h5>
                                <h3 class="font-bold text-sm pt-1"></h3>
                                <v-btn @click="$router.push('buffalo') " depressed   :loading="loading3" :disabled="loading3" color="indigo" class="white--text" >
                                    <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                </v-btn>
                                <!-- <button @click="$router.push('buffalo')" class="text-gray-600 p-2">ดูรายละเอียด</button> -->
                                <!-- <button class="text-gray-600 text-sm">แสดงข้อมูลเพิ่มเติม</button> -->
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/2 p-0 mb-2 md:p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <v-avatar @click="$router.push('/user/addbuffalo')" color="orange" size="80">
                                    <v-icon dark large class="elevation-1 rounded error ">mdi-file-pdf-outline</v-icon>
                                </v-avatar>
                            </div>
                            <div class="flex-1 text-right md:text-center border-b-1 border-green-600">
                                <h5 class="font-bold uppercase text-xl">ใบพันธุ์ประวัติอ้างอิง</h5>
                                <h3 class="font-bold text-sm pt-1"></h3>
                                <v-btn @click="$router.push('buffalo') " depressed   :loading="loading3" :disabled="loading3" color="indigo" class="white--text" >
                                    <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                </v-btn>
                                <!-- <button @click="$router.push('buffalo')" class="text-gray-600 p-2">ดูรายละเอียด</button> -->
                                <!-- <button class="text-gray-600 text-sm">แสดงข้อมูลเพิ่มเติม</button> -->
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div> 
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-4">
                    <!--Metric Card-->
                    <v-text-field prepend-inner-icon="mdi-cow"   label="ชื่อหรือหมายเลขควาย"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric-10-box-multiple-outline"   type="number" label="หมายเลข NID"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric"   type="number" label="หมายเลขไมโครซิป"></v-text-field>
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field   v-model="date" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                    </v-menu>
                    <v-select :items="sex" prepend-inner-icon="mdi-gender-male-female"   label="เพศ"></v-select>
                    <v-text-field prepend-inner-icon="mdi-calendar-clock" type="number"   label="อายุ"></v-text-field>
                    <v-select :items="color" prepend-inner-icon="mdi-invert-colors"   label="สี"></v-select>
                    <v-select :items="from" prepend-inner-icon="mdi-import"   label="แหล่งที่มา"></v-select>
                    <v-text-field prepend-inner-icon="mdi-tag-outline" type="number"   label="ราคา"></v-text-field>
                    <v-select :items="status" prepend-inner-icon="mdi-post-outline"   label="สถานะ"></v-select>
                    <v-text-field prepend-inner-icon="mdi-cow"   label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number"   label="หมายเลข NID พ่อ"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric" type="number"   label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-cow"   label="ชื่อหรือหมายเลขแม่"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number"   label="หมายเลข NID แม่"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric" type="number"   label="หมายเลขไมโครชิปแม่"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-weight-kilogram" type="number"   label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-arrow-left-right" type="number"   label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-arrow-left-right" type="number"   label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-human-male-height-variant" type="number"   label="ความสูง(เซนติเมตร)"></v-text-field>
                    <!--/Metric Card-->
                    <v-btn depressed   class="mt-2" @click="$router.push('/admin/buffalo')" block medium color="success">บันทึก</v-btn>
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
            dialog: true,
            date: null,
            menu: false,
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
                    text: 'เพิ่มควาย',
                    disabled: false,
                    href: '/#/admin/addbuffalo',
                },
            ],

            sex: ['ตัวผู้', 'ตัวเมีย'],
            color: ['ดำ', 'น้ำตาล'],
            from: ['พ่อค้าคนกลาง', 'ตลาด', 'เพาะพันธุ์'],
            status: ['ท้อง', 'ไม่ท้อง'],

            loader: null,
            loading: false,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false,
        }
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        load: async function () {},
        save1(date) {
            this.$refs.menu.save(date)
        },
    },
}
</script>
