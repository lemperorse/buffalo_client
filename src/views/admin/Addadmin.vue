<template>
<div class="bg-gray-100">
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-male-technologist text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; ผู้ดูแลระบบ</h2>
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                    <div class="bg-white border-b-4 border-purple-500 rounded shadow-xl p-4">
                        <form @submit.prevent="registerAdmin()">
                            <v-text-field v-model="form.username" type="text" label="username"></v-text-field>
                            <v-text-field v-model="form.first_name" type="text" label="first_name"></v-text-field>
                            <v-text-field v-model="form.last_name" type="text" label="last_name"></v-text-field>
                            <v-text-field v-model="form.password" type="text" label="password"></v-text-field>
                            <v-text-field v-model="form.password2" type="text" label="password"></v-text-field>
                            <v-btn type="submit" color="success">เพิ่มผู้ดูแลระบบ</v-btn>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import {
    sync,
    call
} from 'vuex-pathify'
export default {
    data() {
        return {
            form: {},
            bc: [{
                    text: 'ผู้ดูแลระบบ',
                    disabled: false,
                    href: '/#/admin/alladmin',
                },
                {
                    text: 'เพิ่มผู้ดูแลระบบ',
                    disabled: false,
                    href: '/#/admin/addadmin',
                },
            ],
        }
    },
    computed: {
        ...sync('auth/*'),
    },
    methods: {
        ...call('auth/*'),
        async registerAdmin() {
            let user = await this.registerUser(this.form);
            user.is_staff = true
              if (user.username && !user.id) {
                for (let index = 0; index < user.username.length; index++) {
                    await this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'ผิดพลาด',
                        text: user.username[index]
                    });
                }
            } 
              if (user.password) {
                for (let index = 0; index < user.password.length; index++) {
                    await this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'ผิดพลาด',
                        text: user.password[index]
                    });
                }
            } 
            let admin = await this.updateUser(user);
            if (admin.id) {
                await this.$notify({
                    group: 'foo',
                    type: 'success',
                    title: 'เพิ่ม Admin สำเร็จแล้ว',
                    text: admin.first_name+' '+admin.last_name
                });
                await this.$router.replace('/admin/alladmin')
            }
        }
    }
}
</script>

<style scoped>
 
</style>
