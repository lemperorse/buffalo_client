<template>
<div>

    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <!--Console Content-->
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <v-text-field dense class=""  v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-dialog scrollable v-model="dialog" max-width="800px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="success" medium dense dark class="" v-bind="attrs" v-on="on">
                                        <v-icon>mdi-plus</v-icon>เพิ่มเกษตรกร
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <h4>เพิ่มเกษตกร</h4>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-row dense>
                                                <v-col cols="12" sm="6">
                                                    <v-select dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.nonb" label="คำนำหน้า "></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.nonb" label="ชื่อ "></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.nid" label="นามสกุล"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-id-card" color="green" outlined v-model="editedItem.IDcardFarmer" type="number" label="หมายเลขบัตรประชาชน"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-file-input dense chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" v-model="editedItem.birth" label="ภาพถ่ายบัตรประจำตัวประชาชน"></v-file-input>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select dense class="rounded-lg" prepend-inner-icon="mdi-human-male-female" color="green" outlined v-model="editedItem.sex" label="เพศ"></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-account-clock-outline" color="green" outlined v-model="editedItem.age" type="number" label="อายุ"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-home" color="green" outlined v-model="editedItem.age" label="ที่อยู่"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-phone" color="green" outlined v-model="editedItem.nmi" type="number" label="เบอร์โทรศัพท์"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-file-input dense chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" v-model="editedItem.from" label="ภาพถ่ายเจ้าของฟาร์ม"></v-file-input>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-file-input dense chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" v-model="editedItem.price" label="ภาพถ่ายสภาพฟาร์ม"></v-file-input>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-home-outline" color="green" outlined v-model="editedItem.status" label="ชื่อฟาร์ม"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-home" color="green" outlined v-model="editedItem.nonf" label="ที่อยู่ฟาร์ม"></v-text-field>
                                                </v-col>

                                                <v-col cols="12" sm="6">
                                                    <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nidf" label="ตำบล"></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nmif" label="อำเภอ"></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nmim" label="จังหวัด"></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select dense class="rounded-lg" prepend-inner-icon="mdi-postage-stamp" color="green" outlined v-model="editedItem.nidm" label="รหัสไปรษณีย์"></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green" outlined v-model="editedItem.mim" label="พิกัดฟาร์มตามระบบ GPS (ละติจูด)"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green" outlined v-model="editedItem.weight" label="พิกัดฟาร์มตามระบบ GPS (ลองติจูด)"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined v-model="editedItem.cwidth" type="number" label="จำนวนกระบือทั้งหมด"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select dense class="rounded-lg" prepend-inner-icon="mdi-account-group-outline" color="green" outlined v-model="editedItem.blength" label="กลุ่มเกษตรกร"></v-select>
                                                </v-col>

                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="green" class="rounded-lg" dark @click="save">
                                            <h5>บันทึก</h5>
                                        </v-btn>
                                        <v-btn color="error" class="rounded-lg" @click="close">
                                            <h5>ยกเลิก</h5>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog> 
                        </div>
                        <!-- <v-divider class="ma-1"></v-divider> -->
                        <!-- <div class="flex flex-row items-center">
                            <v-select dense color="green" :items="province" label="กรุณาเลือกจังหวัด" hide-details outlined></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-select dense color="green" :items="district" label="กรุณาเลือกอำเภอ" hide-details outlined></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-select dense color="green" :items="place" label="กรุณาเลือกตำบล" hide-details outlined></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-select dense color="green" :items="farm" label="กรุณาเลือกฟาร์ม" hide-details outlined></v-select>
                        </div> -->
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <v-data-table c dense :headers="headers" :items="desserts" :search="search" class="elevation-2 pa-2"> 
                        <template v-slot:item.actions="{ item }">
                            <!-- <v-tooltip v-model="show" top> -->
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="success" icon v-bind="attrs" v-on="on" @click="$router.push(`farmer`)">
                                        <v-icon>mdi-eye-outline</v-icon>
                                    </v-btn>
                                </template>
                                <span>ดูข้อมูล</span>
                            </v-tooltip>

                            <!-- <v-tooltip v-model="show" top> -->
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="warning" icon v-bind="attrs" v-on="on" @click="editItem(item)">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                </template>
                                <span>แก้ไข</span>
                            </v-tooltip>

                            <!-- <v-tooltip v-model="show" top> -->
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="error" icon v-bind="attrs" v-on="on" @click="deleteItem(item)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </template>
                                <span>ลบ</span>
                            </v-tooltip>

                        </template>
                        <template v-slot:no-data>
                            <v-btn color="primary" @click="initialize">Reset</v-btn>
                        </template>
                    </v-data-table>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data: () => ({
        // bc: [{
        //     text: 'เกษตกร',
        //     disabled: false,
        //     link: 'true',
        //     href: '/#/farmer',
        // }, ],
        province: [{
                text: 'พะเยา'
            },
            {
                text: 'เชียงราย'
            },
            {
                text: 'แพร่'
            },
            {
                text: 'น่าน'
            },
        ],
        district: [{
                text: 'พะเยา'
            },
            {
                text: 'เชียงราย'
            },
            {
                text: 'แพร่'
            },
            {
                text: 'น่าน'
            },
        ],
        place: [{
                text: 'พะเยา'
            },
            {
                text: 'เชียงราย'
            },
            {
                text: 'แพร่'
            },
            {
                text: 'น่าน'
            },
        ],
        farm: [{
                text: 'พะเยา'
            },
            {
                text: 'เชียงราย'
            },
            {
                text: 'แพร่'
            },
            {
                text: 'น่าน'
            },
        ],

        search: '',
        dialog: false,
        headers: [{
                text: 'เลขบัตรประชาชน',
                value: 'IDCard',
                sortable: false,
            },
            {
                text: 'ชื่อ',
                value: 'name',
                sortable: false,
            },
            {
                text: 'เบอร์โทรศัพท์',
                value: 'Phonenumber',
                sortable: false,
            },
            {
                text: 'กลุ่มเกษตกร',
                value: 'group',
                sortable: false,
            },
            {
                text: 'การจัดการ',
                value: 'actions',
                sortable: false,
            },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            IDCard: '',
            name: '',
            Phonenumber: '',
            group: '',
        },
        defaultItem: {
            IDCard: '',
            name: '',
            Phonenumber: '',
            group: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'เพิ่มข้อมูลเกษตรกร' : 'แก้ไขข้อมูลเกษตรกร'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [{
                    IDCard: 1234567890123,
                    name: 'นายแดง แดงแดง',
                    Phonenumber: '0911231231',
                    group: 'กลุ่มแม่ใจ',
                },
                {
                    IDCard: 3123412345612,
                    name: 'นายดำ ดำดำ',
                    Phonenumber: '0914123412',
                    group: 'กลุ่มแม่ใจ',
                },
                {
                    IDCard: 1231241231233,
                    name: 'นายเขียว เขียวเขียว',
                    Phonenumber: '0812312312',
                    group: 'กลุ่มพาน',
                },
                {
                    IDCard: 1111111111111,
                    name: 'นายเขียว เขียวขจี',
                    Phonenumber: '0822312312',
                    group: 'กลุ่มพาน',
                },
                {
                    IDCard: 2222222222222,
                    name: 'นายเหลือง เหลืองเหลือง',
                    Phonenumber: '0833333333',
                    group: 'กลุ่มแม่กา',
                },
                {
                    IDCard: 3333333333333,
                    name: 'นายชัย',
                    Phonenumber: '0844444444',
                    group: 'กลุ่มแม่กา',
                },
                {
                    IDCard: 4444444444444,
                    name: 'นายใหญ่',
                    Phonenumber: '0855555555',
                    group: 'กลุ่มพะเยา',
                },
                {
                    IDCard: 5555555555555,
                    name: 'นายเล็ก',
                    Phonenumber: '0866666666',
                    group: 'กลุ่มพะเยา',
                },
                {
                    IDCard: 6666666666666,
                    name: 'นายคำ',
                    Phonenumber: '0877777777',
                    group: 'กลุ่มพะเยา',
                },
                {
                    IDCard: 7777777777777,
                    name: 'นายนาย',
                    Phonenumber: '0888888888',
                    group: 'กลุ่มพะเยา',
                },

            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()

        },
    },
}
</script>
