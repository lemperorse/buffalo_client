<template>
<div class="bg-gray-100">
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-male-farmer text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; จัดการเกษตกร</h2> 
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
             
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 mb-3 md:p-3"> 
                    <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <v-text-field dense clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-btn  depressed @click="$router.push('/')" color="blue" medium dense dark>
                                <v-icon>mdi-magnify</v-icon>ค้นหา
                            </v-btn>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-btn depressed @click="$router.push('/admin/addfarmer')" color="success" medium dense dark class="">
                                <v-icon>mdi-plus</v-icon>เพิ่มเกษตรกร
                            </v-btn>
                        </div> 
                    </div>
                </div>

                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                    <v-data-table class="bg-white border-b-4 border-green-500  rounded  shadow-xl  p-2" :headers="headers" :items="desserts" >

                        <template v-slot:item.actions="{ item }"> 
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }"> 
                                    <v-btn color="warning" icon v-bind="attrs" v-on="on" @click="$router.push(`farmer`)">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                </template>
                                <span>แก้ไข</span>
                            </v-tooltip>
 
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

        bc: [{
            text: 'จัดการเกษตกร',
            disabled: false,
            href: '/#/admin/allfarmer',
        }, ],
 
        headers: [{
                text: 'เลขบัตรประชาชน',
                value: 'IDCard',
                sortable: false,
            },
            {
                text: 'ชื่อ-นามสกุล',
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
                text: 'สิทธ์การใช้งาน',
                value: 'license',
                sortable: false,
            },
            {
                text: 'การจัดการ',
                value: 'actions',
                sortable: false,
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
                    group: 'กลุ่มแม่ใจ',
                    license: 'ผู้ใช้',
                },
                {
                    IDCard: 3123412345612,
                    name: 'นายดำ ดำดำ',
                    Phonenumber: '0914123412',
                    group: 'กลุ่มแม่ใจ',
                    license: 'ผู้ใช้'
                },
                {
                    IDCard: 1231241231233,
                    name: 'นายเขียว เขียวเขียว',
                    Phonenumber: '0812312312',
                    group: 'กลุ่มพาน',
                    license: 'ผู้ใช้'
                },
                {
                    IDCard: 1111111111111,
                    name: 'นายเขียว เขียวขจี',
                    Phonenumber: '0822312312',
                    group: 'กลุ่มพาน',
                    license: 'ผู้ใช้'
                },
                {
                    IDCard: 2222222222222,
                    name: 'นายเหลือง เหลืองเหลือง',
                    Phonenumber: '0833333333',
                    group: 'กลุ่มแม่กา',
                    license: 'ผู้ใช้'
                },
                {
                    IDCard: 3333333333333,
                    name: 'นายชัย',
                    Phonenumber: '0844444444',
                    group: 'กลุ่มแม่กา',
                    license: 'ผู้ใช้'
                },
                {
                    IDCard: 4444444444444,
                    name: 'นายใหญ่',
                    Phonenumber: '0855555555',
                    group: 'กลุ่มพะเยา',
                    license: 'ผู้ใช้'
                },
                {
                    IDCard: 5555555555555,
                    name: 'นายเล็ก',
                    Phonenumber: '0866666666',
                    group: 'กลุ่มพะเยา',
                    license: 'ผู้ใช้'
                },
                {
                    IDCard: 6666666666666,
                    name: 'นายคำ',
                    Phonenumber: '0877777777',
                    group: 'กลุ่มพะเยา',
                    license: 'ผู้ใช้'
                },
                {
                    IDCard: 7777777777777,
                    name: 'นายนาย',
                    Phonenumber: '0888888888',
                    group: 'กลุ่มพะเยา',
                    license: 'ผู้ใช้'
                },

            ]
        },

    },
}
</script>
