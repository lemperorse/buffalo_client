<template>
<div class="bg-gray-100">
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-man_in_tuxedo text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; ข้อมูลส่วนตัว</h2>
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>

            <div class="flex flex-wrap mt-4">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                    <div class="bg-white border-b-4 border-blue-500  rounded  shadow-xl  p-2">
                        <div class="w-full pt-1 pb-5">
                            <img class="overflow-hidden rounded-full w-60 h-60 -mt-16 mx-auto shadow-lg" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                        </div>
                        <v-tabs>
                            <v-tab>
                                <v-icon left>mdi-account</v-icon>
                                ข้อมูลส่วนตัว
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-cog</v-icon>
                                ตั้งค่า
                            </v-tab>

                            <v-tab-item>
                                <General />
                            </v-tab-item>

                            <v-tab-item>
                                <ChangePassword />
                            </v-tab-item>

                        </v-tabs>
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
} from 'vuex-pathify';
import General from '@/components/admin/Profile/General';
import ChangePassword from '@/components/admin/Profile/ChangePassword';

export default {
    data() {
        return {
            bc: [{
                text: 'ข้อมูลส่วนตัว',
                disabled: false,
                href: '/#/admin/profile',
            }, ],
            panel: [0, 1, 2, 3],
            formUser: {},
            formPassword: {},
        }
    },
    components: {
        General,
        ChangePassword
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
    async mounted() {
        await this.load();
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('core/*'),
        ...call('auth/*'),
        /******* Methods default run ******/
        load: async function () {

        }
    },
}
</script>

<style scoped>
.bgcardprofile {
    background-image: url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-repeat: no-repat;
    background-size: cover;
    background-blend-mode: multiply;
}
</style>
