<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="bg-gray-100">
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-herb text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; ส่งออกข้อมูลควาย</h2>
                <!-- <h2 class="font-bold text-2xl">ผู้ดูแลระบบ</h2> -->
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
            <!--Console Content-->
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3 mb-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-pink-700 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <v-text-field dense class="" v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <!-- <v-divider vertical class="ma-1"></v-divider> -->
                        </div>
                        <v-divider class="ma-1"></v-divider>
                        <div class="flex flex-row items-center">
                            <v-select dense  :items="province" label="กรุณาเลือกจังหวัด" hide-details outlined></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-select dense  :items="district" label="กรุณาเลือกอำเภอ" hide-details outlined></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-select dense  :items="place" label="กรุณาเลือกตำบล" hide-details outlined></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-select dense  :items="group" label="กรุณาเลือกกลุ่ม" hide-details outlined></v-select>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-btn depressed color="success" medium dense dark class="">ส่งออกรายงาน</v-btn> 
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3 mb-3">
                    <v-data-table class="bg-white border-b-4 border-pink-700 rounded shadow-xl p-2" dense :headers="headers" :items="desserts" :search="search" sort-by="calories">

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
                text: 'ส่งออกข้อมูลควาย',
                disabled: false,
                href: '/#/admin/export',
            },
        ],
        group:['แม่กา','แม่ใจ'],
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
                text: 'จำนวนกระบือทั้งหมด',
                value: 'Phonenumber',
                sortable: false
            },
            {
                text: 'จำนวนกระบือายุ 240 วัน',
                value: 'age240',
                sortable: false
            },
            {
                text: 'จำนวนกระบือายุ 400 วัน',
                value: 'age400',
                sortable: false
            },
            {
                text: 'จำนวนกระบือายุ 600 วัน',
                value: 'age600',
                sortable: false
            },
            {
                text: 'ตำบล',
                value: 'district',
                sortable: false
            },
            {
                text: 'อำเภอ',
                value: 'canton',
                sortable: false
            },
            {
                text: 'จังหวัด',
                value: 'province',
                sortable: false
            },
            {
                text: 'กลุ่มผู้ใช้',
                value: 'group',
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
