<template>
<v-card flat>
    <v-card-title primary-title>
        <h2 class="font-bold text-2xl">ข้อมูลส่วนตัว</h2>
    </v-card-title>

    <v-card-text>
         
                    <form @submit.prevent="prepareUpdate">
                        <v-text-field disabled v-model="user.username" label="ชื่อผู้ใช้" prepend-inner-icon="mdi-email"></v-text-field>
                        <v-text-field :disabled="isUpdate" v-model="form.first_name" label="ชื่อ" prepend-inner-icon="mdi-email"></v-text-field>
                        <v-text-field :disabled="isUpdate" v-model="form.last_name" label="สกุล" prepend-inner-icon="mdi-email"></v-text-field>
                        <v-text-field :disabled="isUpdate" v-model="form.email" label="อีเมลล์" prepend-inner-icon="mdi-email"></v-text-field>

                        <v-card-title v-if='!isUpdate'>
                            <v-spacer></v-spacer>
                            <button type="submit"  style="color:white;" class="text-white bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                                <v-icon style="color:white;" class="mr-2">mdi-content-save-edit</v-icon>บันทึกข้อมูล
                            </button>

                        </v-card-title>
                    </form> 
                    <v-card-title v-if='isUpdate'>
                        <v-spacer></v-spacer>
                        <button   @click="isUpdate = false" style="color:white;" 
                        class="text-white bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            <v-icon style="color:white;" class="mr-2">mdi-content-save-edit</v-icon>แก้ไขข้อมูล
                        </button> 
                    </v-card-title> 
          
    </v-card-text>

</v-card>
</template>

<script>
import {
    sync,
    call
} from 'vuex-pathify';
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            panel: [0, 1, 2, 3],
            txt: 'Hello World',
            isUpdate: true,
            user: {},
            form: {
                "first_name": "",
                "last_name": "",
                "id": 1,
                "is_staff": true,
                "is_superuser": true
            }

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {
        ...sync('core/*'),
        ...sync('auth/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('core/*'),
        ...call('auth/*'),
        async prepareUpdate() {
            await this.updateUser(this.form);
            await this.load();
            this.isUpdate = true
        },
        /******* Methods default run ******/
        load: async function () {
            this.user = await this.getDefaultProfile();
            this.form = await this.getUserById();
            console.log(this.form);
        }
    },
}
</script>

<style lang='postcss' scoped>

</style>
