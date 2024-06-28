import {AuthenticationService} from "@/iam/services/authentication.service.js";
import {defineStore} from "pinia";
import {SignInResponse} from "@/iam/model/sign-in.response.js";
import {SignUpResponse} from "@/iam/model/sign-up.response.js";

const authenticationService = new AuthenticationService();

export const useAuthenticationStore = defineStore( {
    id: 'authentication',
    state:() =>({signedIn: false, userId: 0, userName: ''}),
    getters: {

        isSignedIn: (state) => state["signedIn"],

        currentUserId: state => state["userId"],
        currentUsername: state => state["username"],

        currentToken:()=> localStorage.getItem('token')
    },
    actions: {
        async signIn(signInRequest, router){
            authenticationService.signIn(signInRequest)
                .then(response => {
                    let signInResponse = new SignInResponse(response.data.id,
                        response.data.username, response.data.token);
                    console.log(response.data);
                    this.signedIn = true;
                    this.userId = signInResponse.id;
                    this.username = response.data.username;
                    localStorage.setItem('token', signInResponse.token);
                    console.log(signInResponse);
                    router.push({name: 'client-home'});
                })
                .catch(error => {
                    console.error(error);
                    router.push({name: 'sign-in'});
                });
        },
        async signUp(signUpRequest, router){
            authenticationService.signUp(signUpRequest)
                .then(response =>{
                    let signUpResponse = new SignUpResponse(response.data.message);
                    console.log(signUpResponse.message);
                    router.push({name: 'log-in'});
                    console.log(signUpResponse);
                })
                .catch(error => {
                    console.error(error);
                    router.push({name: 'log-in'});
                });
        },

        async signOut(router){
            this.signedIn = false;
            this.userId = 0;
            this.username = '';
            localStorage.removeItem('token');
            console.log('Signed out');
            await router.push({name: 'log-in'});
        }
    }
})