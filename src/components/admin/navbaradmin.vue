<template>
<div>
    <v-navigation-drawer color="white" v-model="drawer" app clipped>
        <v-list rounded>
            <v-list-item two-line>
                <v-list-item-avatar size="50">
                    <img src="https://randomuser.me/api/portraits/men/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <h5>นายแดง แดงแดง</h5>
                    <h6 color="grey">dang@gmail.com</h6>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item-group color="green">
                <v-list-item v-for="(item, i) in items" :key="i" @click="$router.push(`${item.router}`) ">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="">{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>

    <v-app-bar color="white" class="border-b-2" app clipped-left>
        <v-btn class="d-md-none" color="white" depressed fab @click="$router.go(-1)" small>
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </v-btn>
        <h3>
            &nbsp; {{name}}
        </h3>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

</div>
</template>

<script>
export default {
    name: 'Root',
    components: {

    },
    props: {

    },
    data() {
        return {
            drawer: null,
            items: [{
                    text: "แดชบอร์ด",
                    icon: "em em-linked_paperclips",
                    router: "/admin/home"
                },
                {
                    text: "ข้อมูลส่วนตัว",
                    icon: "em em-man-man-girl-boy",
                    router: "/admin/profile"
                },
                {
                    text: "จัดการเกษตรกร",
                    icon: "em em-male-farmer",
                    router: "/admin/allfarmer"
                },
                {
                    text: "จัดการผู้ดูแลระบบ",
                    icon: "em em-male-technologist",
                    router: "/admin/alladmin"
                },
                {
                    text: "คำขอเปลี่ยนรหัสผ่าน",
                    icon: "em em-spiral_note_pad",
                    router: "/admin/resetpass"
                },
                {
                    text: "ออกจากระบบ",
                    icon: "em em-outbox_tray",
                    router: "/"
                },

            ],

            txt: 'Hello World'

        };
    },
    props: {
        icon: {
            default: 'mdi-view-dashboard',
        },
        name: {
            default: 'Menu',
        }
    },
    mounted: async function () {
        await this.load();
    },
    async beforeRouteEnter(to, from, next) {
        next()
    },
    computed: {

    },
    methods: {
        load: async function () {}
    },
}
</script>

<style>

</style>
