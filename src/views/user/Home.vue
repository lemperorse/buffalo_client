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
                                    <v-icon dark large>mdi-cow</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">ควายทั้งหมด</h5>
                                <h3 class="font-bold text-2xl">100 ตัว </h3>
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
                                    <v-icon dark large>mdi-cow</v-icon>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-500">ควายที่มีชีวิต</h5>
                                <h3 class="font-bold text-2xl">75 ตัว</h3>
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
                                <h5 class="font-bold uppercase text-gray-500">ควายที่เสียชีวิต</h5>
                                <h3 class="font-bold text-2xl">25 ตัว</h3>
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
                                <h3 class="font-bold text-2xl">สรุป</h3>
                            </div>
                        </div>
                        <v-btn small color="success" block @click="$router.push('reportsummary')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>

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
                                <h5 class="font-bold uppercase text-gray-500">รายงานสรุปการเจริญเติบโต</h5>
                                <h3 class="font-bold text-2xl">พันธุ์ประวัติรายฟาร์ม</h3>
                            </div>
                        </div>
                        <v-btn small color="success" block @click="$router.push('reportgrow')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>

            </div>

            <hr class="border-b-2 border-gray-400 my-6 mx-3">
            <div class="m-3">
                <h3 class="font-bold text-2xl">กราฟ</h3>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <h3 class="mb-2">จำนวนควายทั้งหมด</h3>
                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" label="เลือกวันที่" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu1.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                        <div class="flex flex-row items-center">
                            <column-chart :data="chartData"></column-chart>
                        </div>
                        <v-btn small class="mt-2" color="success" block @click="$router.push('reportsummary')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <h3 class="mb-2">ควายที่มีชีวิต</h3>
                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" label="เลือกวันที่" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu2.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                        <div class="flex flex-row items-center">
                            <bar-chart :data="chartData"></bar-chart>
                        </div>
                        <v-btn small class="mt-2" color="success" block @click="$router.push('reportsummary')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <h3 class="mb-2">ควายที่ไม่มีชีวิต</h3>
                        <v-menu ref="menu3" v-model="menu3" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" label="เลือกวันที่" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu3.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                        <div class="flex flex-row items-center">
                            <pie-chart :data="chartData"></pie-chart>
                        </div>
                        <v-btn small class="mt-2" color="success" block @click="$router.push('reportsummary')">แสดงเพิ่มเติม</v-btn>
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
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            menu3: false,
            bc: [{
                text: 'แดชบอร์ด',
                disabled: false,
                href: '/#/admin/home',
            }, ],
            chartData: {
                '2020-05-13': '10',
                '2020-05-14': '15',
                '2020-05-15': '30',
                '2020-05-16': '15',
                '2020-05-17': '50',
                '2020-05-18': '21',
            },

        }
    },
    methods: {

    },

}
</script>

<style scoped> 
</style>
