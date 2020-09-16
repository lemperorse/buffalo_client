<template>
<div>
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-2xl">ผู้ดูแลระบบ</h2>
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>

            <!--Console Content-->
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <v-card>
                        <v-flex xs12>
                            <v-avatar class="profile" color="grey" size="104" tile>
                                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                            </v-avatar>
                            <v-flex xs8 class="mt-10 ml-8">
                                <h1>นายแดง มีชัย</h1>
                            </v-flex>
                        </v-flex>
                    </v-card>
                </div>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <v-card>
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
                                        ข้อมูลส่วนตัว
                                    </v-card-title>
                                    <v-card-text>
                                        <v-text-field value="dang1234" label="ชื่อผู้ใช้งาน" readonly></v-text-field>
                                        <v-text-field value="นายแดง" label="ชื่อ"></v-text-field>
                                        <v-text-field value="มีชัย" label="นามสกุล"></v-text-field>
                                        <v-text-field value="dang1234@gmail.com" label="อีเมล"></v-text-field>
                                    </v-card-text>
                                    <v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-btn class="btnw50" color="success">แก้ไข</v-btn>
                                    </v-card-title>

                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        แก้ไขรหัสผ่าน
                                    </v-card-title>
                                    <v-card-text>
                                        <v-text-field value="dang1234" label="รหัสผ่านเก่า" type="password"></v-text-field>
                                        <v-text-field value="123456789" label="รหัสผ่านใหม่" type="password"></v-text-field>
                                        <v-text-field value="123456789" label="ยืนยันรหัสผ่าน" type="password"></v-text-field>
                                    </v-card-text>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-btn class="btnw50" color="success">แก้ไข</v-btn>
                                    </v-card-title>
                                </v-card>
                            </v-tab-item>

                        </v-tabs>
                    </v-card>
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
                    text: 'แก้ไขผู้ดูแล',
                    disabled: false,
                    href: '/#/admin/editadmin',
                },
            ],
        }
    },
}
</script>

<style scoped>
.btnw50 {
    width: 50%;
}
</style>
