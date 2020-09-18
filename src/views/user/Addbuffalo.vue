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
              
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                    <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl">
                        <v-stepper v-model="e1">
                            <v-stepper-header>
                                <v-stepper-step :complete="e1 > 1" step="1">ข้อมูลทั่วไป</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 2" step="2">ราคาและแหล่งที่มา</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 3" step="3">พ่อพันธุ์และแม่พันธุ์</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 4" step="4">ขนาดควาย</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 5" step="5">รูปภาพควาย</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 6" step="6">ใบพันธุ์ประวัติ</v-stepper-step>
                            </v-stepper-header>

                            <v-stepper-items>
                                <v-stepper-content step="1">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">ข้อมูลทั่วไป</div>
                                    </v-card-title>
                                    <v-text-field value="" prepend-inner-icon="mdi-cow" label="ชื่อหรือหมายเลขควาย"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number" label="หมายเลข NID"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-numeric" type="number" label="หมายเลขไมโครซิป"></v-text-field>
                                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="date" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                        </template>
                                        <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                                    </v-menu>
                                    <v-text-field value="" prepend-inner-icon="mdi-calendar-clock" type="number" label="อายุ(ปี)"></v-text-field>
                                    <v-select :items="sex" value="" prepend-inner-icon="mdi-gender-male-female" label="เพศ"></v-select>
                                    <v-select :items="color" value="" prepend-inner-icon="mdi-invert-colors" label="สี"></v-select>
                                    <v-select :items="status" value="" prepend-inner-icon="mdi-post-outline" label="สถานะ"></v-select>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text>ยกเลิก</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 2">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>

                                </v-stepper-content>

                                <v-stepper-content step="2">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">ราคาและแหล่งที่มา</div>
                                    </v-card-title>
                                    <v-select :items="from" value="" prepend-inner-icon="mdi-import" label="แหล่งที่มา"></v-select>
                                    <v-text-field value="" prepend-inner-icon="mdi-tag-outline" type="number" label="ราคา(บาท)"></v-text-field>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 1">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 3">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                                <v-stepper-content step="3">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">พ่อพันธุ์และแม่พันธุ์</div>
                                    </v-card-title>
                                    <v-text-field value="" prepend-inner-icon="mdi-cow" label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number" label="หมายเลข NID พ่อ"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-numeric" type="number" label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-cow" label="ชื่อหรือหมายเลขแม่"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number" label="หมายเลข NID แม่"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-numeric" type="number" label="หมายเลขไมโครชิปแม่"></v-text-field>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 2">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 4">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                                <v-stepper-content step="4">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">ขนาดควาย</div>
                                    </v-card-title>
                                    <v-text-field value="" prepend-inner-icon="mdi-weight-kilogram" type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                                    <v-text-field value="" prepend-inner-icon="mdi-human-male-height-variant" type="number" label="ความสูง(เซนติเมตร)"></v-text-field>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 3">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 5">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                                <v-stepper-content step="5">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">รูปภาพควาย</div>
                                    </v-card-title>
                                    <h5 class="font-bold uppercase text-gray-700 text-xl ml-6">ภาพถ่ายด้านหน้า</h5>
                                    <v-card-title class="black--text white darken-4 d-flex">
                                        <v-divider vertical inset class="mx-1" dark></v-divider>
                                        <!-- <v-spacer></v-spacer> -->
                                        <v-btn depressed block :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                        </v-btn>
                                    </v-card-title>
                                    <h5 class="font-bold uppercase text-gray-700 text-xl ml-6">ภาพถ่ายด้านข้าง</h5>
                                    <v-card-title class="black--text white darken-4 d-flex">
                                        <v-divider vertical inset class="mx-1" dark></v-divider>
                                        <!-- <v-spacer></v-spacer> -->
                                        <v-btn depressed block :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                        </v-btn>
                                    </v-card-title>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 4">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 6">
                                            ต่อไป
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>

                                <v-stepper-content step="6">
                                    <v-card-title primary-title>
                                        <div class="font-bold text-2xl">ใบพันธุ์ประวัติ</div>
                                    </v-card-title>
                                    <h5 class="font-bold uppercase text-gray-700 text-xl ml-6">ใบพันธุ์ประวัติอ้างอิง</h5>
                                    <v-card-title class="black--text white darken-4 d-flex">
                                        <!-- <v-icon @click="$router.go()" large color="error">mdi-file-pdf-outline</v-icon>
                                        <v-divider vertical inset class="mx-1" dark></v-divider> 
                                        <v-spacer></v-spacer> -->
                                        <v-btn depressed block :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                        </v-btn>
                                    </v-card-title>
                                    <h5 class="font-bold uppercase text-gray-700 text-xl ml-6">ใบพันธุ์ประวัติทางการ</h5>
                                    <v-card-title class="black--text white darken-4 d-flex">
                                        <!-- <v-icon @click="$router.go()" large color="error">mdi-file-pdf-outline</v-icon>
                                        <v-divider vertical inset class="mx-1" dark></v-divider> 
                                        <v-spacer></v-spacer> -->
                                        <v-btn depressed block :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                        </v-btn>
                                    </v-card-title>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="e1 = 5">กลับ</v-btn>
                                        <v-btn depressed color="primary" @click="e1 = 1">
                                            ยืนยัน
                                        </v-btn>
                                    </v-card-title>
                                </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>
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
            e1: 1,
            bc: [{
                    text: 'ควายทั้งหมด',
                    disabled: false,
                    href: '/#/user/allbuffalo',
                },
                {
                    text: 'เพิ่มควาย',
                    disabled: false,
                    href: '/#/user/addbuffalo',
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
