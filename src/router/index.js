import { createRouter, createWebHistory } from "vue-router";
import servicesComponent from "@/components/client-services.component.vue";
import loginComponent from "@/components/login.component.vue";
import passwordRecoveryComponent from "@/components/password-recovery.component.vue";
import passwordRecoveryEmailComponent from "@/components/password-recovery-email.component.vue";
import ProfessionalLayout from "@/components/professional-layout.component.vue";
import clientRequestServiceComponent from "@/components/client-request-service.component.vue";
import ProfessionalSupportComponent from "@/components/professional-support.component.vue";
import SettingsComponent from "@/components/settings.component.vue";
import clientRegisterComponent from "@/components/client-register.component.vue";
import professionalRegisterComponent from "@/components/professional-register.component.vue";
import clientHomeComponent from "@/components/client-home.component.vue";
import payServiceComponent from "@/components/pay-service.component.vue";
import clientSupportComponent from "@/components/client-support.component.vue";
import ProfessionalHomeTableComponent from "@/components/professional-home-table.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/log-in', component: loginComponent, meta: { title: 'Iniciar sesión' } },
        {
            path: '/professional-home',
            component: ProfessionalLayout,
            children: [
                {
                    path: '',
                    component: ProfessionalHomeTableComponent,
                    meta: { title: 'Inicio' }
                },
            ]
        },
        {
            path: '/settings',
            component: ProfessionalLayout,
            children: [
                {
                    path: '',
                    component: SettingsComponent,
                    meta: { title: 'Configuración' }
                },
            ]
        },
        {
            path: '/professional-help',
            component: ProfessionalLayout,
            children: [
                {
                    path: '',
                    component: ProfessionalSupportComponent,
                    meta: { title: 'Configuración' }
                },
            ]
        },
        { path: '/client-register', component: clientRegisterComponent, meta: { title: 'Registrarse' } },
        { path: '/forgot-password', component: passwordRecoveryComponent, meta: { title: 'Recuperar contraseña' } },
        { path: '/recovery-email', component: passwordRecoveryEmailComponent, meta: { title: 'Recuperar contraseña' } },
        { path: '/professional-register', component: professionalRegisterComponent, meta: { title: 'Registrarse' } },
        { path: '/client-home', component: clientHomeComponent, meta: { title: 'Inicio' } },
        { path: '/services', component: servicesComponent, meta: { title: 'Servicios' } },
        { path: '/request-service', component: clientRequestServiceComponent, meta: { title: 'Programar Limpieza' } },
        { path: '/pay-service', component: payServiceComponent, meta: {title: 'Pagar Servicio'}},
        { path: '/client-help', component: clientSupportComponent, meta: { title: 'Soporte' } },
        { path: '/', redirect: '/log-in' },
    ],
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'Clean Wave';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;
