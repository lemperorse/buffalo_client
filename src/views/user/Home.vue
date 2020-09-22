<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="bg-gray-100">
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-2 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-linked_paperclips" aria-role="presentation" aria-label=""></i> &nbsp; แดชบอร์ด</h2>

                <hr class="border-b-2 border-gray-400 mt-4">
            </v-container>
            <!--Console Content-->
            <div class="flex flex-wrap mt-2">
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-blue-700 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2 ">
                                    <i class="em em-water_buffalo text-4xl" aria-role="presentation" aria-label="WATER BUFFALO"></i>
                                    <!-- <v-icon class="text-green-600"   large>mdi-account-multiple</v-icon> -->
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-blue-700">ควายทั้งหมด</h5>
                                <h3 class="font-bold text-2xl">324 ตัว </h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4  border-green-700   rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2  ">
                                    <i class="em em-heart text-4xl" aria-role="presentation" aria-label="WATER BUFFALO"></i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-green-700">ควายที่มีชีวิต</h5>
                                <h3 class="font-bold text-2xl">120 ตัว</h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4  border-orange-700   rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2  ">
                                    <i class="em em-broken_heart text-4xl" aria-role="presentation" aria-label="WATER BUFFALO"></i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-orange-700">ควายที่เสียชีวิต</h5>
                                <h3 class="font-bold text-2xl">15 ตัว</h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

            </div>

            <hr class="border-b-2 border-gray-400 my-6 mx-3">
            <div class="m-3">
                <h3 class="font-bold text-2xl"><i class="em em-chart_with_downwards_trend" aria-role="presentation" aria-label="CHART WITH DOWNWARDS TREND"></i> รายงาน</h3>
            </div>

            <div class="flex flex-wrap">

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-orange-700 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2  ">
                                    <i class="em em-card_file_box text-3xl" aria-role="presentation" aria-label=""></i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-xl text-orange-700 ">รายงานจำนวนควาย</h5>
                                <button @click="$router.push('reportsummary')" class="text-gray-600 p-2">ดูรายละเอียด</button>
                                <!-- <v-btn   color="gray"  text @click="$router.push('reportbuffalo')">ดูรายละเอียด</v-btn> -->
                            </div>
                        </div>

                    </div>
                    <!--/Metric Card-->
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-purple-700 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded p-2  ">
                                    <i class="em em-chart_with_upwards_trend text-3xl" aria-role="presentation" aria-label="CHART WITH UPWARDS TREND"></i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-xl text-purple-700">รายงานสรุปการเจริญเติบโต</h5>
                                <button @click="$router.push('reportgrow')" class="text-gray-600 p-2">ดูรายละเอียด</button>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

            </div>

            <hr class="border-b-2 border-gray-400 my-6 mx-3">
            <div class="m-3">
                <h3 class="font-bold text-2xl"><i class="em em-bar_chart" aria-role="presentation" aria-label="CHART WITH DOWNWARDS TREND"></i> กราฟ</h3>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-green-700 rounded shadow-xl p-2">
                        <h3 class="font-bold uppercase text-xl text-green-700">ควายทั้งหมด</h3>
                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" label="เลือกวันที่" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>

                        <div class="flex flex-row items-center">
                            <column-chart :colors="['#009966']" :data="chartData"></column-chart>
                        </div>
                        <!-- <button @click="$router.push('reportsummary')" class="text-gray-600 p-2">ดูรายละเอียด</button>  -->
                        <v-btn depressed small class="mt-2" color="success" block @click="$router.push('reportsummary')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-blue-700 rounded shadow-xl p-2">
                        <h3 class="font-bold uppercase text-xl text-blue-700">ควายที่มีชีวิต</h3>
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
                            <column-chart :data="chartData"></column-chart>
                        </div>
                        <v-btn depressed small class="mt-2" color="blue" dark block @click="$router.push('reportsummary')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-purple-700 rounded shadow-xl p-2">
                        <h3 class="font-bold uppercase text-xl text-purple-700">ควายที่ไม่มีชีวิต</h3>
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
                            <column-chart :colors="['#9900CC']" :data="chartData"></column-chart>
                        </div>
                        <v-btn depressed small class="mt-2" color="purple" dark block @click="$router.push('reportsummary')">แสดงเพิ่มเติม</v-btn>
                    </div>
                    <!--/Metric Card-->
                </div>
            </div>

            <!-- <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <button @click="$refs.example.open()">
                    Open Success
                </button>
                <vue-modality ref="example" title="Example" ok-title="Save" @ok="okHandle" :ok-loading="loading" @cancel="$refs.example.hide()" centered success>
                    Hello from the other side!
                </vue-modality>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <button @click="$refs.error.open()">
                    Open Error
                </button>
                <vue-modality ref="error" title="error" ok-title="error" @ok="errorHandle" :ok-loading="loading" @cancel="$refs.error.hide()" centered error>
                    Hello from the other side!
                </vue-modality>
            </div> -->


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
                href: '/#/user/home',
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
        // okHandle: function () {
        //     this.loading = true;
        //     var self = this;
        //     setTimeout(function () {
        //         self.loading = false;
        //         self.$refs.example.hide();
        //     }, 2000)
        // }
    }

}
</script>

<style scoped> 
</style>
