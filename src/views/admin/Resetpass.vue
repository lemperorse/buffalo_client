<template>
<div>
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <!--Console Content-->
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <v-text-field dense v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <v-data-table dense :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-2 pa-2"> 
                        <!-- <template v-slot:item.glutenfree="{ item }"> -->
                        <!-- <v-simple-checkbox v-model="item.glutenfree" disabled></v-simple-checkbox> -->
                        <!-- <v-select chips outlined :items="items" label="Solo field"></v-select> -->
                        <!-- </template> -->
                        <template v-slot:item.actions="{  }">
                            <!-- <v-tooltip v-model="show" top> -->
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

        search: '',
        dialog: false,
        headers: [ 
            {
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
        show4: false,

        desserts: [],
        editedIndex: -1,
        editedItem: {
            IDCard: '',
            name: '',
            email: '',
            status: '',
        },
        defaultItem: {
            IDCard: '',
            name: '',
            email: '',
            status: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? ' เพิ่มผู้ดูแล ' : 'แก้ไขข้อมูล'
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
                    // IDCard: '1231231231231',
                    // name: 'นาย',
                    // lastname:'แดง',
                    fname: 'นายแดง',
                    lname: 'มีชัย',
                    phoneNumber: '0123123123',
                    date: '29/6/2020',
                    glutenfree: 'ยังไม่ได้แก้ไขรหัสผ่าน',
                    // glutenfree: true,
                    // email: 'dang1@gmail.com', 
                },
                {
                    // IDCard: '1231231231231',
                    // name: 'นาย',
                    // lastname:'แดง',
                    fname: 'นายแดง',
                    lname: 'มีชัย',
                    phoneNumber: '0123123123',
                    date: '29/6/2020',
                    glutenfree: 'แก้ไขรหัสผ่านแล้ว',
                    // email: 'dang1@gmail.com', 
                },
                {
                    // IDCard: '1231231231231',
                    // name: 'นาย',
                    // lastname:'แดง',
                    fname: 'นายแดง',
                    lname: 'มีชัย',
                    phoneNumber: '0123123123',
                    date: '29/6/2020',
                    glutenfree: 'แก้ไขรหัสผ่านแล้ว',
                    // email: 'dang1@gmail.com', 
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
