<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="bg-gray-100">
    <div class="container w-full mx-auto ">
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
                <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3">
                    <!-- <v-card> -->
                    <div class="bg-white border-b-4 border-green-500  rounded  shadow-xl  p-2">
                        <v-tabs>
                            <v-tab>
                                <v-icon left>mdi-account</v-icon>
                                ข้อมูลเจ้าของควาย
                            </v-tab>
                            <v-tab>
                                <v-icon left>mdi-file-pdf-box-outline</v-icon>
                                ใบพันธุ์ประวัติ
                            </v-tab>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2 class="font-bold text-2xl">ข้อมูลเจ้าของควาย</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ข้อมูลเจ้าของควาย</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field name="name" label="ชื่อเจ้าของควาย" prepend-inner-icon="mdi-account"></v-text-field>
                                                        <v-text-field name="name" label="กลุ่ม" prepend-inner-icon="mdi-account-group"></v-text-field>
                                                        <v-text-field name="name" label="ชื่อฟาร์ม" prepend-inner-icon="mdi-home-outline"></v-text-field>
                                                        <v-text-field name="name" label="ชื่อควาย" prepend-inner-icon="mdi-cow"></v-text-field>
                                                        <v-text-field name="name" label="ที่อยู่ฟาร์ม" prepend-inner-icon="mdi-home-map-marker"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <h2 class="font-bold text-2xl">ใบพันธุ์ประวัติ</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <div>
                                            <v-expansion-panels v-model="panel" multiple flat>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ใบพันธุ์ประวัติอ้างอิง</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field name="name" label="ใบพันธุ์ประวัติอ้างอิง" prepend-inner-icon="mdi-file-pdf-outline"></v-text-field>
                                                    </v-expansion-panel-content> 
                                                </v-expansion-panel>

                                                <v-expansion-panel> 
                                                    <v-expansion-panel-header>
                                                        <h5 class="font-bold uppercase text-gray-700 text-xl">ใบพันธุ์ประวัติทางการ</h5>
                                                    </v-expansion-panel-header>
                                                    <v-expansion-panel-content>
                                                        <v-text-field name="name" label="ใบพันธุ์ประวัติทางการ" prepend-inner-icon="mdi-file-pdf-outline"></v-text-field>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>

                                            </v-expansion-panels>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                        </v-tabs>
                    </div>
                    <!-- </v-card> -->
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
        panel: [0, 1, 2, 3],
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
