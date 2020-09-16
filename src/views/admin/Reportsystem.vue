<template>
<div>
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-2xl">รายงานความเคลื่อนไหวการใช้งานระบบ</h2>
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
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-col md:flex-row items-center">
                            <v-select dense color="green" outlined :items="province" label="กรุณาเลือกจังหวัด" hide-details></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-select dense color="green" outlined :items="district" label="กรุณาเลือกเดือน" hide-details></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-select dense color="green" outlined :items="place" label="กรุณาเลือกปี" hide-details></v-select>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="pa-3 elevation-2 ">
                        <template v-slot:top>
                            <v-dialog v-model="dialog" max-width="500px">
                                <v-card class="rounded-lg">
                                    <v-card-title>
                                        <span class="headline">{{ formTitle }}</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.IDCard" label="เลขบัตรประชาชน"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.name" label="ชื่อ"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.Phonenumber" label="เบอร์โทรศัพท์"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.group" label="กลุ่มผู้ใช้"></v-text-field>
                                                </v-col>

                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="close">ยกเลิก</v-btn>
                                        <v-btn color="blue darken-1" text @click="save">บันทึก</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <!-- </v-toolbar> -->
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

        bc: [{
                text: 'แดชบอร์ด',
                disabled: false,
                href: '/#/admin/home',
            },
            {
                text: 'รายงานความเคลื่อนไหวการใช้งานระบบ',
                disabled: false,
                href: '/#/admin/reportsystem',
            },
        ], 
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
                text: 'มกราคม'
            },
            {
                text: 'กุมภาพันธ์'
            },
            {
                text: 'มีนาคม'
            },
            {
                text: 'เมษายน'
            },
            {
                text: 'พฤษภาคม'
            },
            {
                text: 'มิถุนายน'
            },
            {
                text: 'สิงหาคม'
            },
            {
                text: 'กันยายน'
            },
            {
                text: 'ตุลาคม'
            },
            {
                text: 'พฤศจิกายน'
            },
            {
                text: 'ธันวาคม'
            },

        ],

        place: [{
                text: '2563'
            },

        ],
        farm: [{
                text: 'เชียงกลาง'
            },
            {
                text: 'ท่าวังผา'
            },
            {
                text: 'ทุ่งช้าง'
            },
            {
                text: 'นาน้อย'
            },
            {
                text: 'บ่อเกลือ'
            },
            {
                text: 'นาน้อย'
            },
            {
                text: 'บ้านหลวง'
            },
            {
                text: 'ปัว'
            },
            {
                text: 'ภูเพียง'
            },
            {
                text: 'แม่จริม'
            },
            {
                text: 'เมืองน่าน'
            },
            {
                text: 'เวียงสา'
            },
            {
                text: 'สองแคว'
            },
            {
                text: 'สันติสุข'
            },
        ],

        search: '',
        dialog: false,
        headers: [{
                text: 'เลขบัตรประชาชน',
                value: 'IDCard',
                sortable: false
            },
            {
                text: 'ชื่อ',
                value: 'name',
                sortable: false
            },
            {
                text: 'เบอร์โทรศัพท์',
                value: 'Phonenumber',
                sortable: false
            },
            {
                text: 'กลุ่มผู้ใช้',
                value: 'group',
                sortable: false
            },
            {
                text: 'สถานะการสมัครสมาชิก',
                value: 'status',
                sortable: false
            },
            {
                text: 'วันที่ใช้ล่าสุด ',
                value: 'time',
                sortable: false
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
            return this.editedIndex === -1 ? 'เพิ่ม' : 'แก้ไข'
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
                    status: 'ผู้ใช้สมัครสมาชิกเอง',
                    time: '29/6/2563',
                },
                {
                    IDCard: 3123412345612,
                    name: 'นายดำ ดำดำ',
                    Phonenumber: '0914123412',
                    group: 'กลุ่มแม่ใจ',
                    status: 'เพิ่มโดยแอดมิน',
                    time: '29/6/2563',
                },
                {
                    IDCard: 1231241231233,
                    name: 'นายเขียว เขียวเขียว',
                    Phonenumber: '0812312312',
                    group: 'กลุ่มพาน',
                    status: 'สมัครบนแอปพลิเคชัน',
                    time: '29/6/2563',
                },
                {
                    IDCard: 1111111111111,
                    name: 'นายเขียว เขียวขจี',
                    Phonenumber: '0822312312',
                    group: 'กลุ่มพาน',
                    status: 'สมัครบนแอปพลิเคชัน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 2222222222222,
                    name: 'นายเหลือง เหลืองเหลือง',
                    Phonenumber: '0833333333',
                    group: 'กลุ่มแม่กา',
                    status: 'สมัครบนแอปพลิเคชัน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 3333333333333,
                    name: 'นายชัย',
                    Phonenumber: '0844444444',
                    group: 'กลุ่มแม่กา',
                    status: 'เพิ่มโดยแอดมิน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 4444444444444,
                    name: 'นายใหญ่',
                    Phonenumber: '0855555555',
                    group: 'กลุ่มพะเยา',
                    status: 'สมัครบนแอปพลิเคชัน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 5555555555555,
                    name: 'นายเล็ก',
                    Phonenumber: '0866666666',
                    group: 'กลุ่มพะเยา',
                    status: 'สมัครบนแอปพลิเคชัน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 6666666666666,
                    name: 'นายคำ',
                    Phonenumber: '0877777777',
                    group: 'กลุ่มพะเยา',
                    status: 'เพิ่มโดยแอดมิน',
                    time: '27/6/2563',
                },
                {
                    IDCard: 7777777777777,
                    name: 'นายนาย',
                    Phonenumber: '0888888888',
                    group: 'กลุ่มพะเยา',
                    status: 'สมัครบนแอปพลิเคชัน',
                    time: '27/6/2563',
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
