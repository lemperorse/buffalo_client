<template>
<div class="bg-gray-100">
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-3xl"><i class="em em-world_map text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; รายงานเชิงแผนที่</h2>
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
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-purple-700 rounded shadow-xl p-2">
                        <div class="flex flex-col md:flex-row items-center">
                            <v-expansion-panels flat>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="font-bold "><div class="text-xl">ค้นหา</div> </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <div class="flex flex-row flex-wrap">
                                            <v-select outlined dense class="pa-1" :items="province" label="กรุณาเลือกจังหวัด" hide-details></v-select> 
                                            <v-select outlined dense class="pa-1" :items="aumphur" label="กรุณาเลือกอำเภอ" hide-details></v-select> 
                                            <v-select outlined dense class="pa-1" :items="tumbon" label="กรุณาเลือกตำบล" hide-details></v-select>  
                                            <v-btn depressed class="ma-1 d-sm-block" color="blue"  @click="$router.push('/')" dense dark>
                                                <v-icon>mdi-magnify</v-icon>ค้นหา
                                            </v-btn> 
                                        </div> 
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels> 
                        </div>
                    </div>
 
                    <!-- <div class="bg-white border-b-4 border-purple-700 rounded shadow-xl p-2">
                        <div class="flex flex-col md:flex-row items-center">
                            <v-select dense outlined color="success" :items="province" label="กรุณาเลือกจังหวัด" hide-details></v-select>
                            <v-divider vertical class="m-1"></v-divider>
                            <v-select dense outlined color="success" :items="aumphur" label="กรุณาเลือกอำเภอ" hide-details></v-select>
                            <v-divider vertical class="m-1"></v-divider>
                            <v-select dense outlined color="success" :items="tumbon" label="กรุณาเลือกตำบล" hide-details></v-select>
                        </div>
                    </div> -->
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-purple-700 rounded shadow-xl p-2">
                        <div class="flex flex-col md:flex-row items-center">
                            <GmapMap class="sizemap" :center="center" :zoom="7" map-type-id="roadmap">
                                <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
                            </GmapMap>
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
                href: '/#/admin/home',
            },
            {
                text: 'รายงานเชิงแผนที่',
                disabled: false,
                href: '/#/admin/reportmap',
            }, ],

            province: ['พะเยา', 'น่าน'],
            aumphur: ['เมือง', 'แม่กา'],
            tumbon: ['แม่กา', 'แม่ใจ'],

            center: {
                lat: 19.1664466,
                lng: 99.9019888
            },
            markers: [{
                    position: {
                        lat: 19.1664466,
                        lng: 99.9019888
                    }
                },
                {
                    position: {
                        lat: 20.0,
                        lng: 99.9019888
                    }
                },
                {
                    position: {
                        lat: 19.3,
                        lng: 100.9019888
                    }
                },
                {
                    position: {
                        lat: 20.3,
                        lng: 100.9019888
                    }
                },

            ]

        }
    },
}
</script>

<style scoped>
.sizemap {
    width: 300px;
    height: 300px;
}
</style>
