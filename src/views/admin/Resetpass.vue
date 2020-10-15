<template>
<div class="bg-gray-100"> 
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-spiral_note_pad text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; คำขอเปลี่ยนรหัสผ่าน</h2>
 
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container> 

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 mb-3 md:p-3"> 
                    <div class="bg-white border-b-4 border-blue-500  rounded  shadow-xl  p-2">
                        <div class="flex flex-row items-center">
                            <v-text-field dense v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-btn class="border-blue-500" depressed @click="$router.push('/')" color="blue" medium dense dark>
                                <v-icon>mdi-magnify</v-icon>ค้นหา
                            </v-btn>
                        </div>
                    </div> 
                </div>

                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                    <v-data-table class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2" :headers="headers" :items="desserts" :search="search" sort-by="calories">
                        
                        <template v-slot:item.actions="{  }"> 
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="success" icon v-bind="attrs" v-on="on" @click="$router.push(`farmer`)">
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
        bc: [{
            text: 'คำขอเปลี่ยนรหัสผ่าน',
            disabled: false,
            href: '/#/admin/resetpass',
        }, ],


        headers: [{
                text: 'ชื่อ',
                value: 'fname',
                sortable: false
            },
            {
                text: 'นามสกุล',
                value: 'lname',
                sortable: false
            },
            {
                text: 'เบอร์โทรศัพท์',
                value: 'phoneNumber',
                sortable: false
            },
            {
                text: 'สถานะการแก้ไขรหัสผ่าน',
                value: 'glutenfree',
                sortable: false
            },
            {
                text: 'วันที่ขอคำร้อง',
                value: 'date',
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
                    fname: 'นายแดง',
                    lname: 'มีชัย',
                    phoneNumber: '0123123123',
                    date: '29/6/2020',
                    glutenfree: 'ยังไม่ได้แก้ไขรหัสผ่าน', 
                },
                { 
                    fname: 'นายแดง',
                    lname: 'มีชัย',
                    phoneNumber: '0123123123',
                    date: '29/6/2020',
                    glutenfree: 'แก้ไขรหัสผ่านแล้ว', 
                },
                { 
                    fname: 'นายแดง',
                    lname: 'มีชัย',
                    phoneNumber: '0123123123',
                    date: '29/6/2020',
                    glutenfree: 'แก้ไขรหัสผ่านแล้ว', 
                },

            ]
        },
 
    },
}
</script>
