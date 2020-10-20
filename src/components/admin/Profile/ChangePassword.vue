<template>
<v-card flat>
    <v-card-title primary-title>
        <h2 class="font-bold text-2xl">รหัสผ่าน</h2>
    </v-card-title>

    <v-card-text> 
                    <form @submit.prevent="changePassword()">
                        <v-text-field v-model="form.old_password" label="รหัสผ่านเก่า" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                        <v-text-field v-model="form.new_password1" label="รหัสผ่านใหม่" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                        <v-text-field v-model="form.new_password2" label="ยืนยันรหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                        <v-card-title>
                            <v-spacer></v-spacer>
                            <button type="submit" style="color:white;" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                เปลี่ยนรหัสผ่าน
                            </button>
                        </v-card-title>
                    </form>
            
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

            txt: 'Hello World',
            panel: [0, 1, 2, 3],
            form: {},
            result: [],
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
        async changePassword() {
            this.result = await this.changePasswordUser(this.form);
            if (this.result.new_password2) {
                for (let index = 0; index < this.result.new_password2.length; index++) {
                    await this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'ผิดพลาด',
                        text: this.result.new_password2[index]
                    });
                }
            } 
            console.log(this.result.detail);
            if (this.result.detail) {
                await this.$notify({
                    group: 'foo',
                    type: 'success',
                    title: 'แก้ไขรหัสผ่านสำเร็จ',
                    text: this.result.detail
                });
                this.form = {};
            }
        },
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>

<style lang='postcss' scoped>

</style>
