<template>
<div class="bg-gray-100"> 
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-desktop_computer text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; รายงานความเคลื่อนไหวการใช้งานระบบ</h2> 
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container> 

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3"> 
                    <div class="bg-white border-b-4 border-green-700 rounded shadow-xl p-2">
                        <div class="flex flex-col md:flex-row items-center">
                            <v-expansion-panels flat>
                                <v-expansion-panel>

                                    <v-expansion-panel-header class="font-bold ">
                                        <div class="text-xl">เลือกเดือน</div>
                                    </v-expansion-panel-header>

                                    <v-expansion-panel-content>
                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="date" label="เลือกเดือน" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                            </template>
                                            <v-date-picker v-model="date" type="month" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="menu = false">ยกเลิก</v-btn>
                                                <v-btn text color="primary" @click="$refs.menu.save(date)">ตกลง</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </div> 
                </div>
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <v-data-table class="bg-white border-b-4 border-green-700 rounded shadow-xl p-2" :headers="headers" :items="desserts" :search="search" sort-by="calories">
                        <template v-slot:item.actions="{ item }"> 
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="success" icon v-bind="attrs" v-on="on" @click="$router.push('/admin/farmer')">
                                        <v-icon>mdi-eye-outline</v-icon>
                                    </v-btn>
                                </template>
                                <span>ดูข้อมูล</span>
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

        date: new Date().toISOString().substr(0, 7),
        menu: false, 
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
        
        headers: [ 
            {
                text: 'ชื่อ',
                value: 'name',
                sortable: false
            }, 
            {
                text: 'กิจกรรม',
                value: 'activity',
                sortable: false
            },
            {
                text: 'วันที่ใช้ล่าสุด ',
                value: 'time',
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

    computed: { 
    },

    watch: {
 
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
                    province: 'พะเยา',
                    group: 'กลุ่มแม่ใจ',
                    activity: 'ผู้ใช้สมัครสมาชิกเอง',
                    time: '29/6/2563',
                },
                {
                    IDCard: 3123412345612,
                    name: 'นายดำ ดำดำ',
                    Phonenumber: '0914123412',
                    province: 'พะเยา',
                    group: 'กลุ่มแม่ใจ',
                    activity: 'เพิ่มโดยแอดมิน',
                    time: '29/6/2563',
                },
                {
                    IDCard: 1231241231233,
                    name: 'นายเขียว เขียวเขียว',
                    Phonenumber: '0812312312',
                    province: 'พะเยา',
                    group: 'กลุ่มพาน',
                    activity: 'สมัครบนแอปพลิเคชัน',
                    time: '29/6/2563',
                },
                {
                    IDCard: 1111111111111,
                    name: 'นายเขียว เขียวขจี',
                    Phonenumber: '0822312312',
                    province: 'แพร่',
                    group: 'กลุ่มพาน',
                    activity: 'สมัครบนแอปพลิเคชัน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 2222222222222,
                    name: 'นายเหลือง เหลืองเหลือง',
                    Phonenumber: '0833333333',
                    province: 'น่าน',
                    group: 'กลุ่มแม่กา',
                    activity: 'สมัครบนแอปพลิเคชัน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 3333333333333,
                    name: 'นายชัย',
                    Phonenumber: '0844444444',
                    province: 'แพร่',
                    group: 'กลุ่มแม่กา',
                    activity: 'เพิ่มโดยแอดมิน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 4444444444444,
                    name: 'นายใหญ่',
                    Phonenumber: '0855555555',
                    province: 'น่าน',
                    group: 'กลุ่มพะเยา',
                    activity: 'สมัครบนแอปพลิเคชัน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 5555555555555,
                    name: 'นายเล็ก',
                    Phonenumber: '0866666666',
                    province: 'พะเยา',
                    group: 'กลุ่มพะเยา',
                    activity: 'สมัครบนแอปพลิเคชัน',
                    time: '28/6/2563',
                },
                {
                    IDCard: 6666666666666,
                    name: 'นายคำ',
                    Phonenumber: '0877777777',
                    province: 'แพร่',
                    group: 'กลุ่มพะเยา',
                    activity: 'เพิ่มโดยแอดมิน',
                    time: '27/6/2563',
                },
                {
                    IDCard: 7777777777777,
                    name: 'นายนาย',
                    Phonenumber: '0888888888',
                    province: 'น่าน',
                    group: 'กลุ่มพะเยา',
                    activity: 'สมัครบนแอปพลิเคชัน',
                    time: '27/6/2563',
                },

            ]
        },
 
    },
}
</script>
