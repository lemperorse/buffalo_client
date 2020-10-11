<template> 
<div class="bg-gray-100"> 
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-male-technologist text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; จัดการผู้ดูแลระบบ</h2> 
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
             
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 mb-3 md:p-3"> 
                    <div class="bg-white border-b-4 border-purple-500 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <v-text-field dense v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-btn depressed @click="$router.push('/')" color="blue" medium dense dark class="">
                                <v-icon>mdi-magnify</v-icon>ค้นหา
                            </v-btn>
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-btn depressed @click="$router.push('/admin/addadmin')" color="success" medium dense dark class="mr-1" >
                                <v-icon>mdi-plus</v-icon>เพิ่มผู้ดูแล
                            </v-btn> 
                        </div> 
                    </div> 
                </div>

                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                    <v-data-table class="bg-white border-b-4 border-purple-500 rounded shadow-xl p-2" :headers="headers" :items="desserts" :search="search" sort-by="calories">
                        <template v-slot:item.actions="{ item }"> 
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="warning" icon v-bind="attrs" v-on="on" @click="$router.push('/admin/editadmin')">
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
            text: 'จัดการผู้ดูแลระบบ',
            disabled: false,
            href: '/#/admin/alladmin',
        }, ],
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
            required: value => !!value || 'กรุณากรอกรหัสผ่านให้ตรงกัน.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('กรุณากรอกรหัสผ่านให้ตรงกัน'),
        },

        search: '',
        dialog: false,
        headers: [{
                text: 'ชื่อ',
                value: 'name',
                sortable: false
            },
            {
                text: 'นามสกุล',
                value: 'lastname',
                sortable: false
            },
            {
                text: 'ชื่อผู้ใช้งาน',
                value: 'username',
                sortable: false
            },

            {
                text: 'อีเมล์',
                value: 'email',
                sortable: false
            },
            {
                text: 'สิทธ์การใช้งาน',
                value: 'license',
                sortable: false,
            }, 
            {
                text: 'การจัดการ',
                value: 'actions',
                sortable: false
            },
        ],

        desserts: [],
        editedIndex: -1,
        editedItem: {
            IDCard: '',
            name: '',
            email: '',
            license: '',
        },
        defaultItem: {
            IDCard: '',
            name: '',
            email: '',
            license: '',
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
                    name: 'นายแดง',
                    lastname: 'สวัสดี',
                    username: 'dang123',
                    password: '123456',
                    email: 'dang1@gmail.com',
                    license: 'ผู้ดูแลระบบ',
                },
                {
                    name: 'นายแดง1',
                    lastname: 'สวัสดี1',
                    username: 'dang1234',
                    password: '123123',
                    email: 'dan1g@gmail.com',
                    license: 'ผู้ดูแลระบบ',
                },
                {
                    name: 'นายแดง2',
                    lastname: 'สวัสดี2',
                    username: 'dang1232',
                    password: '111111',
                    email: 'dang1@gmail.com',
                    license: 'ผู้ดูแลระบบ',
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
