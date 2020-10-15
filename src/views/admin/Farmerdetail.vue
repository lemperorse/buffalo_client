<template>
<div class="bg-gray-100">
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-male-farmer text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; ข้อมูลเกษตกร</h2>
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
             
            <div class="flex flex-row flex-wrap p-0 md:p-3 mb-3">
                <div class="mx-auto w-full md:w-2/3"> 
                    <div class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased bgcardprofile">
                        <div class="md:w-1/3 w-full">
                            <img class="rounded-lg shadow-lg antialiased" src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
                        </div>
                        <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                            <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                                <div class="text-2xl text-white leading-tight">นายแดง มีชัย</div>
                                <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span class="border-b border-dashed border-gray-500 pb-1">เกษตกร</span></div>
                                <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">เข้าสู่ระบบครั้งล่าสุด: <b>2 ที่ผ่านมา</b></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3"> 
                    <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2">
                        <v-tabs>
                            <v-tab>
                                <v-icon left>mdi-account</v-icon>
                                ข้อมูลเกษตกร
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-home-group</v-icon>
                                ข้อมูลฟาร์ม
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-cow</v-icon>
                                ข้อมูลควาย
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-file-image</v-icon>
                                รูปภาพ
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-cog</v-icon>
                                ตั้งค่า
                            </v-tab>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2 class="font-bold text-2xl">ข้อมูลเกษตกร</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">เกี่ยวกับเกษตกร</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-select :items="prefix" value="นาย" label="คำนำหน้า" prepend-inner-icon="mdi-human-male-female"></v-select>
                                                        <v-text-field value="นายแดง" label="ชื่อ" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                                        <v-text-field value="มีชัย" label="นามสกุล" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                                        <v-select :items="gender" value="ชาย" label="เพศ" prepend-inner-icon="mdi-human-male-female"></v-select>
                                                        <v-text-field value="1231231231231" label="หมายเลขบัตรประชาชน" type="number" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                                        <v-text-field value="55" label="อายุ" prepend-inner-icon="mdi-account-clock-outline"></v-text-field>

                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ติดต่อและที่อยู่</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="123/123" label="ที่อยู่" prepend-inner-icon="mdi-home-map-marker"></v-text-field>
                                                        <v-text-field value="0123123123" label="เบอร์โทร" type="number" prepend-inner-icon="mdi-phone"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>
                                    <v-card-title>
                                        <v-spacer></v-spacer>
                                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                            แก้ไข
                                        </button> 
                                    </v-card-title>

                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2 class="font-bold text-2xl">ข้อมูลฟาร์ม</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">เกี่ยวกับฟาร์ม</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="ฟาร์มนายแดง" prepend-inner-icon="mdi-home-outline" label="ชื่อฟาร์ม"></v-text-field>
                                                        <v-text-field value="12 ตัว" prepend-inner-icon="mdi-cow" type="number" label="จำนวนควายทั้งหมด"></v-text-field>
                                                        <v-select :items="group" value="กลุ่มแม่กา" prepend-inner-icon="mdi-account-group-outline" label="กลุ่มเกษตกร"></v-select>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ที่อยู่ฟาร์ม</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="111 ต.แม่กา" prepend-inner-icon="mdi-home" label="​ที่อยู่ฟาร์ม"></v-text-field>
                                                        <v-select :items="tumbon" value="แม่กา" prepend-inner-icon="mdi-map-marker-multiple" label="ตำบล"></v-select>
                                                        <v-select :items="aumphur" value="แม่กา" prepend-inner-icon="mdi-map-marker-multiple" label="อำเภอ"></v-select>
                                                        <v-select :items="province" value="พะเยา" prepend-inner-icon="mdi-map-marker-multiple" label="จังหวัด"></v-select>
                                                        <v-select :items="postalcode" value="56000" prepend-inner-icon="mdi-postage-stamp" label="รหัสไปรษณีย์"></v-select>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">พิกัด GPS</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="1231231231" prepend-inner-icon="mdi-map-marker-multiple-outline" label="พิกัดฟาร์มตามระบบ GPS (ละติจูด)"></v-text-field>
                                                        <v-text-field value="123123123" prepend-inner-icon="mdi-map-marker-multiple-outline" label="พิกัดฟาร์มตามระบบ GPS (ลองติจูด)"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>
                                    <v-card-title>
                                        <v-spacer></v-spacer>
                                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                            แก้ไข
                                        </button> 
                                    </v-card-title> 
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2 class="font-bold text-2xl">ข้อมูลควาย</h2>
                                    </v-card-title>

                                    <div class="container w-full mx-auto">
                                        <div class="w-full md:px-0 text-gray-800 leading-normal"> 
                                            <div class="flex flex-wrap">
                                                <div class="w-full md:w-1/1 xl:w-1/1 p-1"> 
                                                    <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2">
                                                        <div class="flex flex-row items-center">
                                                            <v-text-field dense clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                                                            <v-divider vertical class="ma-1"></v-divider>
                                                            <v-btn class="border-blue-500" depressed @click="$router.push('/')" color="blue" medium dense dark>
                                                                <v-icon>mdi-magnify</v-icon>ค้นหา
                                                            </v-btn>
                                                            <v-divider vertical class="ma-1"></v-divider>
                                                            <v-btn depressed @click="$router.push('/admin/addbuffalo')" color="success" dark class="">
                                                                <v-icon>mdi-plus</v-icon>เพิ่มควาย
                                                            </v-btn> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <v-card-text>
                                        <v-data-table class="bg-white  border-blue-500 rounded shadow-xl p-2" :headers="headers" :items="desserts" sort-by="calories">
                                            <template v-slot:item.actions="{ item }"> 
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn color="primary" icon v-bind="attrs" v-on="on">
                                                            <v-icon>mdi-clipboard-text-outline</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>ใบพันธุ์ประวัติ</span>
                                                </v-tooltip>
 
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn color="warning" icon v-bind="attrs" v-on="on" @click="$router.push(`buffalo`)">
                                                            <v-icon>mdi-pencil</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>ดูข้อมูล</span>
                                                </v-tooltip> 
                                            </template>

                                            <template v-slot:no-data>
                                                <v-btn color="primary" @click="initialize">Reset</v-btn>
                                            </template>

                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2 class="font-bold text-2xl">รูปภาพ</h2>
                                    </v-card-title>

                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ภาพถ่ายบัตรประชาชน</h5>
                                                    </v-expansion-panel-header>

                                                    <v-expansion-panel-content>
                                                        <center> 
                                                            <v-img class=" elevation-1" width="300" height="150" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                                                            <v-btn color="success mt-4" depressed>
                                                                <v-icon>mdi-upload</v-icon>อัพโหลดบัตรประชาชน
                                                            </v-btn>
                                                        </center>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ภาพถ่ายฟาร์ม</h5>
                                                    </v-expansion-panel-header>

                                                    <v-expansion-panel-content>
                                                        <center> 
                                                            <v-img class=" elevation-1" width="300" height="150" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></v-img>
                                                            <v-btn color="success mt-4" depressed>
                                                                <v-icon>mdi-upload</v-icon>อัพโหลดภาพถ่ายฟาร์ม
                                                            </v-btn>
                                                        </center>
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
                                        <h2 class="font-bold text-2xl">ตั้งค่า</h2>
                                    </v-card-title>

                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ตั้งค่ารหัสผ่าน</h5>
                                                    </v-expansion-panel-header>

                                                    <v-expansion-panel-content>
                                                        <v-text-field value="123456789" label="รหัสผ่านใหม่" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                                                        <v-text-field value="123456789" label="ยืนยันรหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">จัดการสิทธิ์</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-select :items="licen" value="" label="ตั้งค่าสิทธิ์" prepend-inner-icon="mdi-license"></v-select>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ลบเกษตกร</h5>
                                                    </v-expansion-panel-header>

                                                    <v-expansion-panel-content>
                                                        <v-card-title class="black--text white darken-4 d-flex"> 
                                                            <h5 @click="$router.go()">ลบเกษตกร</h5>
                                                            <v-spacer></v-spacer>
                                                            <v-btn depressed :loading="loading3" :disabled="loading3" color="error" class="white--text" @click="loader = 'loading3'">
                                                                <v-icon>mdi-eraser</v-icon>ลบเกษตกร
                                                            </v-btn>
                                                        </v-card-title>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>

                                    <v-card-title>
                                        <v-spacer></v-spacer>
                                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                            แก้ไข
                                        </button> 
                                    </v-card-title>
                                </v-card>
                            </v-tab-item>

                        </v-tabs>
                    </div> 
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
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
        ],

        panel: [0, 1, 2, 3],
        prefix: ['นาย', 'นาง', 'นางสาว'],
        gender: ['ชาย', 'หญิง'],
        tumbon: ['แม่กา', 'แม่ใจ'],
        aumphur: ['แม่กา', 'แม่ใจ'],
        province: ['พะเยา', 'น่าน'],
        postalcode: ['56000', '56100'],
        group: ['แม่กา', 'แม่ใจ'],

        licen:['ผู้ใช้','แบน'],

        sex: ['ตัวผู้', 'ตัวเมีย'],
        color: ['ดำ', 'น้ำตาล'],
        from: ['พ่อค้าคนกลาง', 'คลอด'],
        status: ['ท้อง', 'ไม่ท้อง'],

        menu: false,
        tab: null,


        loader: null,
        loading: false,
        loading2: false,
        loading3: false,

        headers: [{
                text: 'ชื่อ',
                value: 'name',
                sortable: false
            },
            {
                text: 'เบอร์หู',
                value: 'number',
                sortable: false
            },
            {
                text: 'อายุ',
                value: 'age',
                sortable: false
            },
            {
                text: 'เพศ',
                value: 'sex',
                sortable: false
            },
            {
                text: 'การจัดการ',
                value: 'actions',
                sortable: false
            },
        ],

        desserts: [],
       
    }),

    watch: {
 
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [{
                    name: 'กระบือ1',
                    number: '3',
                    gene: 'thai',
                    age: '4ปี0เดือน',
                    sex: 'เมีย'
                },
                {
                    name: 'กระบือ2',
                    number: '2',
                    gene: 'thai',
                    age: '2ปี1เดือน',
                    sex: 'ผู้'
                },
                {
                    name: 'กระบือ3',
                    number: '9',
                    gene: 'thai',
                    age: '6ปี2เดือน',
                    sex: 'ผู้'
                },
                {
                    name: 'กระบือ4',
                    number: '7',
                    gene: 'thai',
                    age: '1ปี',
                    sex: 'เมีย'
                },
                {
                    name: 'กระบือ5',
                    number: '1',
                    gene: 'thai',
                    age: '2ปี',
                    sex: 'เมีย'
                },
                {
                    name: 'กระบือ6',
                    number: '2',
                    gene: 'thai',
                    age: '3ปี',
                    sex: 'เมีย'
                },
            ]
        },

    },

}
</script>

<style scoped>

.bgcardprofile {
    background-image: url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-repeat: no-repat;
    background-size: cover;
    background-blend-mode: multiply;
}
</style>
