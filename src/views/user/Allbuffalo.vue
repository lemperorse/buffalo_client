<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="container w-full mx-auto">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <h2 class="font-bold text-2xl">ข้อมูลควาย</h2>
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
                        <!-- <v-text-field dense v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field> -->

                        <v-divider vertical class="p-1"></v-divider>
                        <v-btn @click="$router.push('/user/addbuffalo')" color="green" class="rounded-lg deep-purple accent-4" dark>
                            <h3>เพิ่มควาย</h3>
                        </v-btn>
                    </div>
                    <v-radio-group class="pa-2" v-model="radios" :mandatory="false" :row="row">
                        <v-layout row wrap :class="`d-flex justify-space-around`">
                            <v-radio color="success" label="ทั้งหมด" value="ทั้งหมด"></v-radio>
                            <v-radio color="success" label="ตัวผู้" value="ตัวผู้"></v-radio>
                            <v-radio color="success" label="ตัวเมีย" value="ตัวเมีย"></v-radio>
                        </v-layout>
                        <!-- <center>
                            <p class="d-block pa-2 deep-purple accent-4 white--text rounded-lg">{{ radios || 'null' }}</p>
                        </center> -->
                    </v-radio-group>
                </div>
                <div class="flex flex-wrap mt-2">
                    <v-card class="w-full md:w-1/2 xl:w-1/4 p-1 mt-1">
                        <v-card-title primary-title>
                            <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                        </v-card-title>
                        <v-card-text>
                            <h3 class="pt-2 font-bold text-2xl">ชื่อควาย : พ่อเปี้ย</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">เบอร์หู : 123</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">อายุ : 4ปี</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">เพศ : ผู้</h3>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="$router.push('/user/buffalo')" block color="success">แสดงเพิ่มเติม</v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card class="w-full md:w-1/2 xl:w-1/4 p-1 mt-1">
                        <v-card-title primary-title>
                            <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                        </v-card-title>
                        <v-card-text>
                            <h3 class="pt-2 font-bold text-2xl">ชื่อควาย : พ่อเปี้ย</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">เบอร์หู : 123</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">อายุ : 4ปี</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">เพศ : ผู้</h3>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="$router.push('/user/buffalo')" block color="success">แสดงเพิ่มเติม</v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card class="w-full md:w-1/2 xl:w-1/4 p-1 mt-1">
                        <v-card-title primary-title>
                            <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                        </v-card-title>
                        <v-card-text>
                            <h3 class="pt-2 font-bold text-2xl">ชื่อควาย : พ่อเปี้ย</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">เบอร์หู : 123</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">อายุ : 4ปี</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">เพศ : ผู้</h3>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="$router.push('/user/buffalo')" block color="success">แสดงเพิ่มเติม</v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card class="w-full md:w-1/2 xl:w-1/4 p-1 mt-1">
                        <v-card-title primary-title>
                            <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                        </v-card-title>
                        <v-card-text>
                            <h3 class="pt-2 font-bold text-2xl">ชื่อควาย : พ่อเปี้ย</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">เบอร์หู : 123</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">อายุ : 4ปี</h3>
                            <h3 class="pt-2 font-weight-light text-2xl">เพศ : ผู้</h3>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block color="success">แสดงเพิ่มเติม</v-btn>
                        </v-card-actions>
                    </v-card>

                </div>
                <div class="text-center mt-4">
                    <v-pagination v-model="page" color="green" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
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
            text: 'ควายทั้งหมด',
            disabled: false,
            href: '/#/user/allbuffalo',
        }, ],

        sex: ['ตัวผู้', 'ตัวเมีย'],
        color: ['ดำ', 'น้ำตาล'],
        from: ['พ่อค้าคนกลาง', 'คลอด'],
        status: ['ท้อง', 'ไม่ท้อง'],

        items: ['มีชีวิต', 'ไม่มีชีวิต'],
        dialog: false,
        dialog1: true,
        radios: 'ทั้งหมด',
        row: null,
        checkbox: false,
        checkbox1: false,
        checkbox2: false,
        radioGroup: 1,
        switch1: true,
        page: 1

    }),
    methods: {
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()

        },
        save1(date) {
            this.$refs.menu.save(date)
        },
    },

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

.width {
    width: 95%;
}
</style>
