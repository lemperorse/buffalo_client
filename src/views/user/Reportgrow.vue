<template> 
<div class="container w-full mx-auto bg-gray-100">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <h2 class="font-bold text-3xl"><i class="em em-chart_with_upwards_trend" aria-role="presentation" aria-label=""></i> &nbsp; รายงานการเจริญเติบโตพันธุ์ประวัติรายฟาร์ม</h2>
            <v-breadcrumbs :items="bc" large>
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <hr class="border-b-2 border-gray-400 ma-1">
        </v-container>

        <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-3"> 
                <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-10">
                    <v-text-field name="name" label="ชื่อฟาร์ม"></v-text-field>
                    <v-text-field name="name" label="จำนวนควายอายุ 240 วัน"></v-text-field>
                    <v-text-field name="name" label="จำนวนควายอายุ 400 วัน"></v-text-field>
                    <v-text-field name="name" label="จำนวนควายอายุ 600 วัน"></v-text-field>
                </div> 
            </div>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-3"> 
                <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-2">
                    <h3 class="font-bold uppercase text-xl text-green-500">การเจริญเติบโตพันธุ์ประวัติ</h3> 
                    <div class="flex flex-row items-center">
                        <area-chart :colors="['#009966']" :data="chartData"></area-chart>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data: () => ({
        bc: [{
                text: 'แดชบอร์ด',
                disabled: false,
                href: '/#/user/home',
            },
            {
                text: 'รายงานการเจริญเติบโตพันธุ์ประวัติรายฟาร์ม',
                disabled: false,
                href: '/#/user/reportgrow',
            },
        ],

        chartData: {
                '2020-05-13': '10',
                '2020-05-14': '15',
                '2020-05-15': '30',
                '2020-05-16': '15',
                '2020-05-17': '50',
                '2020-05-18': '21',
            },

    }),

}
</script>

<style>
.bg {
    background: rgba(242, 243, 244);
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
