<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="container w-full mx-auto">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <h2 class="font-bold text-2xl">ข้อมูลควาย</h2>
            <v-breadcrumbs :items="bc" large>
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <hr class="border-b-2 border-gray-400 ">
        </v-container>
        <!--Console Content-->
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/2 p-3">
                <v-card>
                    <v-card-title primary-title>
                        ภาพถ่ายด้านหน้า
                        <v-spacer></v-spacer>
                        <v-btn :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลดรูปภาพ
                        </v-btn>
                    </v-card-title>

                    <v-divider class="px-1"></v-divider>
                    <v-card-text>
                        <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                    </v-card-text>
                </v-card>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/2 p-3">
                <v-card>
                    <v-card-title primary-title>
                        ภาพถ่ายด้านข้าง
                        <v-spacer></v-spacer>
                        <v-btn :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                            <v-icon>mdi-cloud-upload</v-icon>อัพโหลดรูปภาพ
                        </v-btn>
                    </v-card-title>
                    <v-divider class="px-1"></v-divider>
                    <v-card-text>
                        <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                    </v-card-text>
                </v-card>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <v-card>
                        <v-tabs>
                            <v-tab>
                                <v-icon left>mdi-cow</v-icon>
                                ข้อมูลควาย
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-chart-bell-curve-cumulative</v-icon>
                                การเจริญเติบโต
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-file-pdf-outline</v-icon>
                                ใบพันธุ์ประวัติ
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-cog</v-icon>
                                ตั้งค่า
                            </v-tab>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h5 class="font-bold text-2xl">รายละเอียดควาย</h5>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">ข้อมูลทั่วไป</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="พ่อเปี้ย" prepend-inner-icon="mdi-cow" label="ชื่อหรือหมายเลขควาย"></v-text-field>
                                                        <v-text-field value="1233" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number" label="หมายเลข NID"></v-text-field>
                                                        <v-text-field value="123" prepend-inner-icon="mdi-numeric" type="number" label="หมายเลขไมโครซิป"></v-text-field>
                                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-text-field v-model="date" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                                            </template>
                                                            <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                                                        </v-menu>
                                                        <v-select :items="sex" value="ตัวผู้" prepend-inner-icon="mdi-gender-male-female" label="เพศ"></v-select>
                                                        <v-text-field value="6" prepend-inner-icon="mdi-calendar-clock" type="number" label="อายุ(ปี)"></v-text-field>
                                                        <v-select :items="color" value="ดำ" prepend-inner-icon="mdi-invert-colors" label="สี"></v-select>
                                                        <v-select :items="status" value="มีชีวิต" prepend-inner-icon="mdi-post-outline" label="สถานะ"></v-select>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">ราคาและแหล่งที่มา</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-select :items="from" value="พ่อค้าคนกลาง" prepend-inner-icon="mdi-import" label="แหล่งที่มา"></v-select>
                                                        <v-text-field value="12300" prepend-inner-icon="mdi-tag-outline" type="number" label="ราคา(บาท)"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">พ่อพันธุ์และแม่พันธุ์</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="พ่อเปี้ย" prepend-inner-icon="mdi-cow" label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                                                        <v-text-field value="123" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number" label="หมายเลข NID พ่อ"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-numeric" type="number" label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                                                        <v-text-field value="แม่เปี้ย" prepend-inner-icon="mdi-cow" label="ชื่อหรือหมายเลขแม่"></v-text-field>
                                                        <v-text-field value="12" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number" label="หมายเลข NID แม่"></v-text-field>
                                                        <v-text-field value="1234" prepend-inner-icon="mdi-numeric" type="number" label="หมายเลขไมโครชิปแม่"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">น้ำหนัก</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-weight-kilogram" type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-human-male-height-variant" type="number" label="ความสูง(เซนติเมตร)"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </div>
                                        <!-- <v-text-field value="พ่อเปี้ย" prepend-inner-icon="mdi-cow" outlined label="ชื่อหรือหมายเลขควาย"></v-text-field>
                                        <v-text-field value="1233" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" outlined type="number" label="หมายเลข NID"></v-text-field>
                                        <v-text-field value="123" prepend-inner-icon="mdi-numeric" outlined type="number" label="หมายเลขไมโครซิป"></v-text-field>
                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field outlined v-model="date" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                                        </v-menu>
                                        <v-select :items="sex" value="ตัวผู้" prepend-inner-icon="mdi-gender-male-female" outlined label="เพศ"></v-select>
                                        <v-text-field value="6" prepend-inner-icon="mdi-calendar-clock" outlined type="number" label="อายุ(ปี)"></v-text-field>
                                        <v-select :items="color" value="ดำ" prepend-inner-icon="mdi-invert-colors" outlined label="สี"></v-select> -->
                                        <!-- <v-select :items="from" value="พ่อค้าคนกลาง" prepend-inner-icon="mdi-import" outlined label="แหล่งที่มา"></v-select>
                                        <v-text-field value="12300" prepend-inner-icon="mdi-tag-outline" outlined type="number" label="ราคา(บาท)"></v-text-field> -->
                                        <!-- <v-select :items="status" value="มีชีวิต" prepend-inner-icon="mdi-post-outline" outlined label="สถานะ"></v-select> -->
                                        <!-- <v-text-field value="พ่อเปี้ย" prepend-inner-icon="mdi-cow" outlined label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                                        <v-text-field value="123" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" outlined type="number" label="หมายเลข NID พ่อ"></v-text-field>
                                        <v-text-field value="111" prepend-inner-icon="mdi-numeric" outlined type="number" label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                                        <v-text-field value="แม่เปี้ย" prepend-inner-icon="mdi-cow" outlined label="ชื่อหรือหมายเลขแม่"></v-text-field>
                                        <v-text-field value="12" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" outlined type="number" label="หมายเลข NID แม่"></v-text-field>
                                        <v-text-field value="1234" prepend-inner-icon="mdi-numeric" outlined type="number" label="หมายเลขไมโครชิปแม่"></v-text-field> -->
                                        <!-- <v-text-field value="111" prepend-inner-icon="mdi-weight-kilogram" outlined type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" outlined type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" outlined type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                                        <v-text-field value="111" prepend-inner-icon="mdi-human-male-height-variant" outlined type="number" label="ความสูง(เซนติเมตร)"></v-text-field> -->

                                    </v-card-text>
                                    <v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-btn class="btnw50" color="success">แก้ไข</v-btn>
                                    </v-card-title>

                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h5 class="font-bold text-2xl">การเจริญเติบโต</h5>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="$router.push('/admin/addage')" color="success" dark>
                                            <v-icon>mdi-plus</v-icon>เพิ่มอายุ
                                        </v-btn>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">อายุ 240 วัน</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-weight-kilogram" type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-human-male-height-variant" type="number" label="ความสูง(เซนติเมตร)"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">อายุ 400 วัน</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-weight-kilogram" type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-human-male-height-variant" type="number" label="ความสูง(เซนติเมตร)"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">อายุ 600 วัน</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-weight-kilogram" type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-arrow-left-right" type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                                                        <v-text-field value="111" prepend-inner-icon="mdi-human-male-height-variant" type="number" label="ความสูง(เซนติเมตร)"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>
                                    <v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-btn class="btnw50" color="success">แก้ไข</v-btn>
                                    </v-card-title>

                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h5 class="font-bold text-2xl">ใบพันธุ์ประวัติ</h5>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">ใบพันธุ์ประวัติอ้างอิง</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-card-title class="black--text white darken-4 d-flex">
                                                            <v-icon @click="$router.go()" large color="error">mdi-file-pdf-outline</v-icon>
                                                            <v-divider vertical inset class="mx-1" dark></v-divider>
                                                            <h5 @click="$router.go()">ใบพันธุ์ประวัติอ้างอิง</h5>
                                                            <v-spacer></v-spacer>
                                                            <v-btn :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                                                <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                                            </v-btn>
                                                        </v-card-title>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">ใบพันธุ์ประวัติทางการ</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-card-title class="black--text white darken-4 d-flex">
                                                            <v-icon @click="$router.go()" large color="error">mdi-file-pdf-outline</v-icon>
                                                            <v-divider vertical inset class="mx-1" dark></v-divider>
                                                            <h5 @click="$router.go()">ใบพันธุ์ประวัติทางการ</h5>
                                                            <v-spacer></v-spacer>
                                                            <v-btn :loading="loading3" :disabled="loading3" color="indigo" class="white--text" @click="loader = 'loading3'">
                                                                <v-icon>mdi-cloud-upload</v-icon>อัพโหลด
                                                            </v-btn>
                                                        </v-card-title>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h5 class="font-bold text-2xl">ตั้งค่า</h5>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-500 text-2xl">ควาย</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-card-title class="black--text white darken-4 d-flex">
                                                            <!-- <v-icon @click="$router.go()" large color="error">mdi-file-pdf-outline</v-icon>
                                                            <v-divider vertical inset class="mx-1" dark></v-divider> -->
                                                            <h5 @click="$router.go()">ลบควาย</h5>
                                                            <v-spacer></v-spacer>
                                                            <v-btn :loading="loading3" :disabled="loading3" color="error" class="white--text" @click="loader = 'loading3'">
                                                                <v-icon>mdi-eraser</v-icon>ลบควาย
                                                            </v-btn>
                                                        </v-card-title>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                        </v-tabs>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data: () => ({
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
        ],
        panel: [0, 1, 2, 3],

        sex: ['ตัวผู้', 'ตัวเมีย'],
        color: ['ดำ', 'น้ำตาล'],
        from: ['พ่อค้าคนกลาง', 'ตลาด', 'เพาะพันธุ์'],
        status: ['ท้อง', 'ไม่ท้อง'],
        age1: ['240', '400', '600'],

        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,

        length: 2,
        onboarding: 0,

        dialog: false,

        items: ['มีชีวิต', 'ไม่มีชีวิต', ],
        date: null,
        menu: false,
        desserts: [{
                describe: 'หมายเลขบัตรประชาชนเกษตรกร',
                calories: '3560700337836',
            },
            {
                describe: 'ชื่อหรือหมายเลขควาย',
                calories: 'เปีย',
            },
            {
                describe: 'หมายเลข NID',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิป',
                calories: ' ',
            },
            // {
            //     describe: 'วัน/เดือน/ปี เกิด',
            //     calories: ' ',
            // },
            // {
            //     describe: 'เพศ',
            //     calories: 'เมีย',
            // },
            {
                describe: 'อายุ (..ปี..เดือน) ',
                calories: '4ปี 0เดือน',
            },
            // {
            //     describe: 'สี',
            //     calories: 'ดำ',
            // },
            // {
            //     describe: 'แหล่งที่มา ',
            //     calories: 'พ่อค้าคนกลาง',
            // },
            {
                describe: 'ราคา',
                calories: '50000',
            },
            // {
            //     describe: 'สถานะควาย',
            //     calories: 'ท้อง',
            // },
            {
                describe: 'ชื่อหรือหมายเลขพ่อ',
                calories: ' ',
            },
            {
                describe: 'หมายเลข NID พ่อ',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิปพ่อ',
                calories: ' ',
            },
            {
                describe: 'ชื่อหรือหมายเลขแม่',
                calories: ' ',
            },
            {
                describe: 'หมายเลข NID แม่',
                calories: ' ',
            },
            {
                describe: 'หมายเลขไมโครชิปแม่',
                calories: ' ',
            },
            {
                describe: 'น้ำหนัก (กิโลกรัม)',
                calories: '400',
            },
            {
                describe: 'ความกว้างรอบอก (เซนติเมตร)',
                calories: '224',
            },
            {
                describe: 'ความยาวลำตัว (เซนติเมตร)',
                calories: '128',
            },
            {
                describe: 'ความสูง (เซนติเมตร)',
                calories: '132',
            },
        ],

        desserts1: [{
                describe1: 'น้ำหนัก (กิโลกรัม)',
                calories1: '97 กิโลกรัม',
            },
            {
                describe1: 'ความกว้างรอบอก (เซนติเมตร)',
                calories1: '56 เซนติเมตร',
            },
            {
                describe1: 'ความยาวลำตัว (เซนติเมตร)',
                calories1: '102 เซนติเมตร',
            },
            {
                describe1: 'ความสูง (เซนติเมตร)',
                calories1: '78 เซนติเมตร',
            },

        ],

    }),
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        load: async function () {},
        save1(date) {
            this.$refs.menu.save(date)
        },

        next() {
            this.onboarding = this.onboarding + 1 === this.length ?
                0 :
                this.onboarding + 1
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0 ?
                this.length - 1 :
                this.onboarding - 1
        },
    },

}
</script>

<style scoped>
.btnw50 {
    width: 50%;
}
</style>
