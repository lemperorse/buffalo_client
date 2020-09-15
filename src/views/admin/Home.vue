<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div>
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-2xl">แดชบอร์ด</h2>
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
            <!--Console Content-->
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2 bg-green-600">
                                    <v-icon dark large>mdi-account-multiple</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">เกษตกรทั้งหมด</h5>
                                <h3 class="font-bold text-2xl">324 คน </h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2 bg-green-500">
                                    <v-icon dark large>mdi-account-clock</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">สมัครสมาชิกใหม่ในเดือนนี้</h5>
                                <h3 class="font-bold text-2xl">120 คน</h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2 bg-green-600">
                                    <v-icon dark large>mdi-cow</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">ควายทั้งหมด</h5>
                                <h3 class="font-bold text-2xl">100 ตัว</h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

            </div>

            <hr class="border-b-2 border-gray-400 my-6 mx-3">
            <div class="m-3">
                <h3 class="font-bold text-2xl">รายงาน</h3>
            </div>

            <div class="flex flex-wrap">

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2 bg-green-600">
                                    <v-icon dark large>mdi-clipboard-text-outline</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">รายงาน</h5>
                                <h3 class="font-bold text-2xl">ควาย</h3>
                            </div>
                        </div>
                        <v-btn small color="success" block @click="$router.push('reportbuffalo')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2 bg-green-600">
                                    <v-icon dark large>mdi-map-marker-radius-outline</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">รายงาน</h5>
                                <h3 class="font-bold text-2xl">เชิงแผนที่</h3>
                            </div>
                        </div>
                        <v-btn small color="success" block @click="$router.push('reportmap')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2 bg-green-600">
                                    <v-icon dark large>mdi-clipboard-flow-outline</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">รายงานความเคลื่อนไหว</h5>
                                <h3 class="font-bold text-2xl">การใช้งานระบบ</h3>
                            </div>
                        </div>
                        <v-btn small color="success" block @click="$router.push('reportsystem')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2 bg-green-600">
                                    <v-icon dark large>mdi-file-export-outline</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">ส่งออกข้อมูลการ</h5>
                                <h3 class="font-bold text-2xl">เจริญเติบโตควาย</h3>
                            </div>
                        </div>
                        <v-btn small color="success" block @click="$router.push('export')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            bc: [{
                text: 'แดชบอร์ด',
                disabled: false,
                href: '/#/admin/home',
            }, 
            ],

        }
    },
    methods: {

    },

}
</script>

<style scoped> 
</style>
