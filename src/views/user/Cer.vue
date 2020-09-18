<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="container w-full mx-auto bg-gray-100">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <h2 class="font-bold text-3xl"><i class="em em-clipboard" aria-role="presentation" aria-label=""></i> &nbsp; ควายและใบพันธุ์ประวัติ</h2>
            <!-- <h2 class="font-bold text-2xl">รายงานการเจริญเติบโตพันธุ์ประวัติรายฟาร์ม</h2> -->
            <v-breadcrumbs :items="bc" large>
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <hr class="border-b-2 border-gray-400 ma-1">
        </v-container>

        <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                <!--Metric Card-->
                <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-10">
                    <v-text-field   name="name" label="ชื่อควาย" ></v-text-field>
                    <v-text-field   name="name" label="ใบพันธุ์ประวัติอ้างอิง" ></v-text-field>
                    <v-text-field   name="name" label="ใบพันธุ์ประวัติทางการ" ></v-text-field> 
                </div>
                <!--/Metric Card-->
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
            text: 'ค้นหาใบพันธุ์ประวัติ',
            disabled: false,
            href: '/#/user/search',
            },
            {
            text: 'ควายและใบพันธุ์ประวัติ',
            disabled: false,
            href: '/#/user/cer',
            }, 
            ],

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
