<template>
 <!-- <div class="bg-gray-100 font-sans leading-normal tracking-normal"> -->
 <div>
     <!--Container-->
     <div class="container w-full mx-auto">
         <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

             <v-container>
                 <h2 class="font-bold text-2xl">ผู้ดูแลระบบ</h2>
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
                     <div class="bg-white border rounded shadow p-2"> 
                             <v-text-field label="ชื่อ" placeholder=""></v-text-field>
                             <v-text-field label="นามสกุล" placeholder=""></v-text-field>
                             <v-text-field label="ชื่อผู้ใช้งาน" placeholder=""></v-text-field>
                             <v-text-field label="รหัสผ่าน" placeholder=""></v-text-field>
                             <v-text-field label="ยืนยันรหัสผ่าน" placeholder=""></v-text-field>
                             <v-text-field label="อีเมล" placeholder=""></v-text-field>
                             <v-card-title primary-title> 
                             <v-spacer></v-spacer>
                             <v-btn @click="$router.push('/admin/alladmin')" class="btnw50" color="success">บันทึก</v-btn>
                            </v-card-title>
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
                    text: 'ผู้ดูแลระบบ',
                    disabled: false,
                    href: '/#/admin/alladmin',
                },
                {
                    text: 'เพิ่มผู้ดูแลระบบ',
                    disabled: false,
                    href: '/#/admin/addadmin',
                },
            ],
        }
    },
}
</script>
<style scoped>
.btnw50{
    width:50%;
} 
</style>
