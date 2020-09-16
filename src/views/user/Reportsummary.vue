<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="container w-full mx-auto">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <h2 class="font-bold text-2xl">รายงานสรุป</h2>
            <v-breadcrumbs :items="bc" large>
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <hr class="border-b-2 border-gray-400 ma-1">
        </v-container>

        <!--Console Content-->
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                <!--Metric Card-->
                <div class="bg-white border">
                    <div class="flex flex-row items-center">
                        <v-select large dense class="pa-2 mt-6" :items="items" label="มีชีวิต,ไม่มีชีวิต" flat outlined single-line></v-select>
                    </div>
                    <v-radio-group class="pa-2" v-model="radios" :mandatory="false" :row="row">
                        <v-layout row wrap :class="`d-flex justify-space-around`">
                            <v-radio color="success" label="ทั้งหมด" value="ทั้งหมด"></v-radio>
                            <v-radio color="success" label="ตัวผู้" value="ตัวผู้"></v-radio>
                            <v-radio color="success" label="ตัวเมีย" value="ตัวเมีย"></v-radio>
                        </v-layout>
                    </v-radio-group>
                </div>
            </div>
            <div class="flex flex-wrap"> 
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border rounded shadow p-2">
                        <h3 class="mb-2">สรุปควาย</h3>
                        <div class="flex flex-row items-center">
                             <column-chart :data="chartData"></column-chart>
                        </div>
                         
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
    data() {
        return {
            bc: [{
                    text: 'แดชบอร์ด',
                    disabled: false,
                    href: '/#/user/home',
                },
                {
                    text: 'รายงานสรุป',
                    disabled: false,
                    href: '/#/user/reportsummary',
                },
            ],
            chartData:{
                '2020-05-13' : '10',
                '2020-05-14' : '15',
                '2020-05-15' : '30',
                '2020-05-16' : '15',
                '2020-05-17' : '50',
                '2020-05-18' : '21',
            },
            items: ['มีชีวิต', 'ไม่มีชีวิต'],
            radios: 'ทั้งหมด',
            row: null,
        }
    },
}
</script>
