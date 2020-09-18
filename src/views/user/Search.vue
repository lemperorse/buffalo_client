<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div class="container w-full mx-auto bg-gray-100">
    <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <v-container>
            <h2 class="font-bold text-3xl"><i class="em em-clipboard text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; ค้นหาใบพันธุ์ประวัติ</h2>
            <!-- <h2 class="font-bold text-2xl">ข้อมูลควาย</h2> -->
            <v-breadcrumbs :items="bc" large>
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <hr class="border-b-2 border-gray-400 ">
        </v-container>

        <!--Console Content-->
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/1 xl:w-1/1 p-0 mb-3 md:p-3">
                    <!--Metric Card-->
                    <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-2">
                        <div class="flex flex-row items-center">
                            <v-text-field dense v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหาตามกลุ่ม,อำเภอ,ตำบล,จังหวัด,ชื่อฟาร์ม" outlined single-line></v-text-field>
                        </div> 
                    </div> 
                </div>

            <div class="w-full md:w-1/1 xl:w-1/1 ">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2 xl:w-1/4 p-0 md:p-3 mb-3" v-for="i in 8" >
                        <!--Metric Card-->
                        <div class="bg-white border-b-4 border-green-600 rounded shadow-xl p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-shrink pr-4">
                                    <v-avatar color="orange" size="80">
                                        <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></v-img>
                                    </v-avatar>
                                </div>
                                <div class="flex-1 text-right md:text-center border-b-1 border-green-600">
                                    <h5 class="font-bold uppercase text-base"><span class="border-b border-dashed border-green-500 ">เจ้าของ : นายแดง</span></h5>
                                    <h5 class="font-bold uppercase text-sm">พ่อเปี้ย(1231)</h5> 
                                    <button @click="$router.push('cer')" class="text-gray-600 p-2">ดูรายละเอียด</button> 
                                    <!-- <button class="text-gray-600 text-sm">แสดงข้อมูลเพิ่มเติม</button> -->
                                </div>
                            </div>
                        </div>
                        <!--/Metric Card-->
                    </div>  
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
            text: 'ค้นหาใบพันธุ์ประวัติ',
            disabled: false,
            href: '/#/user/search',
        }, ],
        search: '',

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
