<script setup>

</script>

<template>
    <div class="login-container">
        <div class="login-wrapper">
            <div class="panel-head">
                <h2 class="heading-1">
                    Đăng nhập
                </h2>
                <div class="description">Chào mừng bạn đến với hệ thống <br> <span>VUEJS SYSTEM</span> </div>
            </div>
            <form @submit.prevent="login" class="panel-body">
                <div class="form-row mb-20">
                    <div class="label">Tên đăng nhập</div>
                    <input v-model="formData.email" type="text" name="email" id="email" class="input-text" autocomplete="off">
                </div>
                <div class="form-row mb-20">
                    <div class="label">
                        <div class="uk-flex uk-flex-between">
                            <span>
                                Mật khẩu
                            </span>
                            <a href="" title="" class="forgot">Quên mật khẩu ?</a>
                        </div>
                    </div>
                    <input v-model="formData.password" type="password" name="password" id="password" class="input-text" autocomplete="off">
                </div>
                <div class="form-row mb-20">
                    <button type="submit" class="uk-button btn-login">Đăng nhập</button>
                </div>
            </form>
            <div class="panel-root">
                Or Log in using
            </div>
            <div class="social-container">
                <a href="#" class="social"><i class='bx bxl-facebook-square'></i></a>
                <a href="#" class="social"><i class='bx bxl-google-plus-circle'></i></a>
                <a href="#" class="social"><i class='bx bxl-twitter'></i></a>
            </div>
        </div>
    </div>
</template>

<style scoped>  
    .login-container{
        padding-top: 100px;
    }

    .login-wrapper{
        width: 410px;
        margin:0 auto;
        border-radius: 10px;
        box-shadow: 0 0.125rem 0 rgba(10,10,10,.04);
        padding: 48px;
        background: #fff;
    }

    .login-container .panel-head{
        text-align: center;
        margin-bottom: 20px;
    }

    .login-wrapper .heading-1{
        font-weight: 700;
        text-transform: uppercase;
        font-size: 24px;
    }

    .login-container .description{
        font-size: 15px;
        color: #000;
    }

    .login-container .description span{
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
        color: rgb(89, 144, 239);
    }

    .btn-login{
        background: rgb(89, 144, 239);
        width: 100%;
        border-radius: 5px;
        height: 40px;
        color: #fff;
    }

    .login-wrapper .panel-root{
        text-align: center;
    }

    .login-wrapper .label{
        font-weight: 500;
        margin-bottom: 5px;
        color: #000;
    }

    .form-row .forgot{
        color: rgb(89, 144, 239);
        font-size: 13px;
    }

    .social-container{
        margin: 20px 0;
        display: flex;
        justify-content: center;
    }

    .social-container a{
        height: 40px;
        width: 40px;
        margin: 0 5px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid  #ccc;
        border-radius: 50%;
    }

    .social-container i{
        font-size: 25px;
    }

</style>

<script>
import AuthorizationServiceAdmin from "../../../../services/admin/authorization.service";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthorizationServiceAdmin.submitLogin(
          this.formData
        );
        switch (response.data) {
          case "wrong info":
            // Đăng nhập không thành công
            toast.error(
              "Đăng nhập không thành công. Vui lòng kiểm tra thông tin đăng nhập và thử lại.",
              {
                autoClose: 800,
              }
            );
            break;
          case "success":
            // Đăng nhập thành công
            toast.success("Đăng nhập thành công", {
              autoClose: 800,
            });
            setTimeout(() => {
              this.$router.push({ name: "seafood" });
            }, 1500);
            break;
          default:
            break;
        }
      } catch (error) {
        console.log(error);
        toast.error("Username or password is incorrect", {
          autoClose: 800,
        });
      }
    },
  },
};
</script>