<template>
<div>
    <h2>ข้อมูลการเข้าสู่ระบบ</h2>
    <form>
        <v-text-field v-model="form.password" type="text" label="password"></v-text-field> 
        <v-text-field v-model="form.username" type="text" label="username"></v-text-field> 
        <v-text-field v-model="form.email" type="text" label="email"></v-text-field>
        <v-text-field v-model="form.is_staff" type="number" label="is_staff"></v-text-field>
        <v-text-field v-model="form.is_active" type="number" label="is_active"></v-text-field> 
    </form>
    <h2>ข้อมูลเกษตรกร</h2>
    <form>
 <v-text-field v-model="form.first_name" type="text" label="first_name"></v-text-field>
        <v-text-field v-model="form.last_name" type="text" label="last_name"></v-text-field>
    </form>
    <h2>ข้อมูลที่อยู่</h2>
    <form>

    </form>

    <v-text-field v-model="form.id" type="number" label="id"></v-text-field>
    <v-text-field v-model="form.address" type="text" label="address"></v-text-field>
    <v-text-field v-model="form.mooban" type="text" label="mooban"></v-text-field>
    <v-text-field v-model="form.zipcode" type="text" label="zipcode"></v-text-field>
    <v-text-field v-model="form.tel" type="text" label="tel"></v-text-field>
    <v-text-field v-model="form.birthday" type="date" label="birthday"></v-text-field>

    <v-text-field v-model="form.personal_id" type="text" label="personal_id"></v-text-field>
    <v-text-field v-model="form.profile_image" type="text" label="profile_image"></v-text-field>
    <v-text-field v-model="form.presonal_image" type="text" label="presonal_image"></v-text-field>
    <v-text-field v-model="form.created_at" type="datetime" label="created_at"></v-text-field>
    <v-text-field v-model="form.updated_at" type="datetime" label="updated_at"></v-text-field>
    <v-text-field v-model="form.amphur_id" type="number" label="amphur_id"></v-text-field>
    <v-text-field v-model="form.district_id" type="number" label="district_id"></v-text-field>
    <v-text-field v-model="form.gender_id" type="number" label="gender_id"></v-text-field>
    <v-text-field v-model="form.geo_id" type="number" label="geo_id"></v-text-field>
    <v-text-field v-model="form.prefix_id" type="number" label="prefix_id"></v-text-field>
    <v-text-field v-model="form.province_id" type="number" label="province_id"></v-text-field>
    <v-text-field v-model="form.user_id" type="number" label="user_id"></v-text-field>
</div>
</template>

<script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {

            txt: 'Hello World'

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style lang='postcss' scoped>

</style>
