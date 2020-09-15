<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
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
                            <v-divider vertical class="ma-1"></v-divider>
                            <v-dialog scrollable v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="success" medium dense dark class="mr-1" v-bind="attrs" v-on="on">
                                        <v-icon>mdi-plus</v-icon>เพิ่มผู้ดูแล
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">
                                            <h3>เพิ่มผู้ดูแล</h3>
                                        </span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container class="rounded-lg">
                                            <v-row dense>
                                                <v-col cols="12 " sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.name" label="ชื่อจริง"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.lastname" label="นามสกุล"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-account" color="green" outlined v-model="editedItem.username" label="ชื่อผู้ใช้งาน"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" outlined :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="รหัสผ่าน" counter @click:append="show1 = !show1"></v-text-field>
                                                </v-col>
                                                <v-col col="12">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" outlined :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'" :type="show4 ? 'text' : 'password'" name="input-10-2" label="ยืนยันรหัสผ่าน" value="" counter error @click:append="show4 = !show4"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-email" color="green" outlined v-model="editedItem.email" label="อีเมล"></v-text-field>
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

                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <v-data-table dense :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-2 pa-2"> 

                        <template v-slot:item.actions="{ item }">
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
                 text: 'ชื่อจริง',
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
                     name: 'นายแดง',
                     lastname: 'สวัสดี',
                     username: 'dang123',
                     password: '123456',
                     email: 'dang1@gmail.com',
                     status: 'ผู้ดูแลระบบ',
                 },
                 {
                     name: 'นายแดง1',
                     lastname: 'สวัสดี1',
                     username: 'dang1234',
                     password: '123123',
                     email: 'dan1g@gmail.com',
                     status: 'ผู้ดูแลระบบ',
                 },
                 {
                     name: 'นายแดง2',
                     lastname: 'สวัสดี2',
                     username: 'dang1232',
                     password: '111111',
                     email: 'dang1@gmail.com',
                     status: 'ผู้ดูแลระบบ',
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
