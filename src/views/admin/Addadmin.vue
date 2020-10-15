<template> 
 <div class="bg-gray-100"> 
     <div class="container w-full mx-auto">
         <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

             <v-container>
                 <h2 class="font-bold text-3xl"><i class="em em-male-technologist text-4xl" aria-role="presentation" aria-label=""></i> &nbsp; ผู้ดูแลระบบ</h2> 
                 <v-breadcrumbs :items="bc" large>
                     <template v-slot:divider>
                         <v-icon>mdi-chevron-right</v-icon>
                     </template>
                 </v-breadcrumbs>
                 <hr class="border-b-2 border-gray-400 ">
             </v-container>
              
             <div class="flex flex-wrap">
                 <div class="w-full md:w-1/1 xl:w-1/1 p-0 md:p-3"> 
                     <div class="bg-white border-b-4 border-purple-500 rounded shadow-xl p-4"> 
                             <v-text-field label="ชื่อ" placeholder="" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                             <v-text-field label="นามสกุล" placeholder="" prepend-inner-icon="mdi-card-account-details-outline"></v-text-field>
                             <v-text-field label="ชื่อผู้ใช้งาน" placeholder="" prepend-inner-icon="mdi-account"></v-text-field>
                             <v-text-field label="รหัสผ่าน" placeholder="" prepend-inner-icon="mdi-lock"></v-text-field>
                             <v-text-field label="ยืนยันรหัสผ่าน" placeholder="" prepend-inner-icon="mdi-lock"></v-text-field>
                             <v-text-field label="อีเมล" placeholder="" prepend-inner-icon="mdi-email"></v-text-field> 
                             <v-btn depressed block medium @click="$router.push('/admin/alladmin')" color="success">บันทึก</v-btn>
                     </div> 
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
 
</style>
