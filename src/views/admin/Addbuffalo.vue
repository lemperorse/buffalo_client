<template>
<!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
<div>
    <!--Container-->
    <div class="container w-full mx-auto">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            <v-container>
                <h2 class="font-bold text-2xl">เพิ่มควาย</h2>
                <v-breadcrumbs :items="bc" large>
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
                <hr class="border-b-2 border-gray-400 ">
            </v-container>
            <!--Console Content--> 
            <div class="flex flex-wrap m-3">
                <v-card class="w-full md:w-1/2 xl:w-1/2 p-1 mt-1">
                    <center>
                        <h3 class="font-bold text-2xl">ภาพด้านหน้า</h3>
                    </center>
                    <v-card-title primary-title>
                        <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn @click="$router.push('/user/buffalo')" block color="success">อัพโหลดรูปภาพ</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="w-full md:w-1/2 xl:w-1/2 p-1 mt-1">
                    <center>
                        <h3 class="font-bold text-2xl">ภาพด้านข้าง</h3>
                    </center>
                    <v-card-title primary-title>
                        <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2"></v-img>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn @click="$router.push('/user/buffalo')" block color="success">อัพโหลดรูปภาพ</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="w-full md:w-1/2 xl:w-1/2 p-3 mt-1">
                    <v-card-title primary-title>
                        <center>
                            <h3 class="font-bold text-1xl">ใบพันธุ์ประวัติอ้างอิง</h3>
                        </center>
                        <v-spacer></v-spacer>
                        <v-icon dark large class="elevation-1 rounded error ">mdi-file-pdf-outline</v-icon>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn @click="$router.push('/user/buffalo')" block color="success">อัพโหลด</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="w-full md:w-1/2 xl:w-1/2 p-3 mt-1">
                    <v-card-title primary-title>
                        <center>
                            <h3 class="font-bold text-1xl">ใบพันธุ์ประวัติทางการ</h3>
                        </center>
                        <v-spacer></v-spacer>
                        <v-icon dark large class="elevation-1 rounded error ">mdi-file-pdf-outline</v-icon>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn @click="$router.push('/user/buffalo')" block color="success">อัพโหลด</v-btn>
                    </v-card-actions>
                </v-card>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/1 xl:w-1/1 p-3">
                    <!--Metric Card-->
                    <v-text-field prepend-inner-icon="mdi-cow" outlined label="ชื่อหรือหมายเลขควาย"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric-10-box-multiple-outline" outlined type="number" label="หมายเลข NID"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric" outlined type="number" label="หมายเลขไมโครซิป"></v-text-field>
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field outlined v-model="date" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                    </v-menu>
                    <v-select :items="sex" prepend-inner-icon="mdi-gender-male-female" outlined label="เพศ"></v-select>
                    <v-text-field prepend-inner-icon="mdi-calendar-clock" type="number" outlined label="อายุ"></v-text-field>
                    <v-select :items="color" prepend-inner-icon="mdi-invert-colors" outlined label="สี"></v-select>
                    <v-select :items="from" prepend-inner-icon="mdi-import" outlined label="แหล่งที่มา"></v-select>
                    <v-text-field prepend-inner-icon="mdi-tag-outline" type="number" outlined label="ราคา"></v-text-field>
                    <v-select :items="status" prepend-inner-icon="mdi-post-outline" outlined label="สถานะ"></v-select>
                    <v-text-field prepend-inner-icon="mdi-cow" outlined label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number" outlined label="หมายเลข NID พ่อ"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric" type="number" outlined label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-cow" outlined label="ชื่อหรือหมายเลขแม่"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric-10-box-multiple-outline" type="number" outlined label="หมายเลข NID แม่"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-numeric" type="number" outlined label="หมายเลขไมโครชิปแม่"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-weight-kilogram" type="number" outlined label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-arrow-left-right" type="number" outlined label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-arrow-left-right" type="number" outlined label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                    <v-text-field prepend-inner-icon="mdi-human-male-height-variant" type="number" outlined label="ความสูง(เซนติเมตร)"></v-text-field>
                    <!--/Metric Card-->
                    <v-btn @click="$router.push('/admin/buffalo')" block medium color="success">บันทึก</v-btn>
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
            dialog: true,
            date: null,
            menu: false,
            bc: [
                {
                    text: 'เกษตกร',
                    disabled: false,
                    href: '/#/admin/allfarmer',
                },
                {
                    text: 'ข้อมูลเกษตกร',
                    disabled: false,
                    href: '/#/admin/farmer',
                },
                {
                    text: 'เพิ่มควาย',
                    disabled: false,
                    href: '/#/admin/addbuffalo',
                },
            ],

            sex: ['ตัวผู้', 'ตัวเมีย'],
            color: ['ดำ', 'น้ำตาล'],
            from: ['พ่อค้าคนกลาง', 'ตลาด', 'เพาะพันธุ์'],
            status: ['ท้อง', 'ไม่ท้อง'],
        }
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        load: async function () {},
        save1(date) {
            this.$refs.menu.save(date)
        },
    },
}
</script>
