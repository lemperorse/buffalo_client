<template>
<div class="bg-gray-100">
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-male-technologist text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; ข้อมูลส่วนตัว</h2> 
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>

            <div class="flex flex-row flex-wrap p-0 mb-3 md:p-3">
                <div class="mx-auto w-full md:w-2/3"> 
                    <div class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased bgcardprofile">
                        <div class="md:w-1/3 w-full">
                            <img class="rounded-lg shadow-lg antialiased" src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
                        </div>
                        <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                            <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                                <div class="text-2xl text-white leading-tight">นายแดง มีชัย</div>
                                <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span class="border-b border-dashed border-gray-500 pb-1">ผู้ดูแลระบบ</span></div>
                                <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">เข้าสู่ระบบครั้งล่าสุด: <b>2 ที่ผ่านมา</b></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3"> 
                    <div class="bg-white border-b-4 border-blue-500 rounded shadow-xl p-2">
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
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2 class="font-bold text-2xl">ข้อมูลส่วนตัว</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ตั้งค่ารหัสผ่าน</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="dang1234" label="ชื่อผู้ใช้งาน" readonly prepend-inner-icon="mdi-account"></v-text-field>
                                                        <v-text-field value="นายแดง มีชัย" label="ชื่อ-นามสกุล" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                                                        <v-text-field value="dang1234@gmail.com" label="อีเมล" prepend-inner-icon="mdi-email"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>

                                    <v-card-title>
                                        <v-spacer></v-spacer> 
                                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                            แก้ไข
                                        </button>
                                    </v-card-title>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2 class="font-bold text-2xl">รหัสผ่าน</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ตั้งค่ารหัสผ่าน</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field value="dang1234" label="รหัสผ่านเก่า" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                                                        <v-text-field value="123456789" label="รหัสผ่านใหม่" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                                                        <v-text-field value="123456789" label="ยืนยันรหัสผ่าน" type="password" prepend-inner-icon="mdi-lock"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">จัดการสิทธิ์</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-select :items="licen" value="" label="ตั้งค่าสิทธิ์" prepend-inner-icon="mdi-license"></v-select>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>

                                    <v-card-title>
                                        <v-spacer></v-spacer> 
                                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                            แก้ไข
                                        </button>
                                    </v-card-title>
                                </v-card>
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
export default {
    data() {
        return {
            bc: [{
                    text: 'ผู้ดูแลระบบ',
                    disabled: false,
                    href: '/#/admin/alladmin',
                },
                {
                    text: 'ข้อมูลผู้ดูแลระบบ',
                    disabled: false,
                    href: '/#/admin/editadmin',
                },
            ],
            panel: [0, 1, 2, 3],
            licen: ['ผู้ดูแลระบบ'],
        }
    },
}
</script>

<style scoped>
.btnw50 {
    width: 50%;
}

.bgcardprofile {
    background-image: url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-repeat: no-repat;
    background-size: cover;
    background-blend-mode: multiply;
}
</style>
