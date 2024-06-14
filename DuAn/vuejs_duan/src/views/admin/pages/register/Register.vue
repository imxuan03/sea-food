<template>
    <div class="register-container">
      <div class="register-wrapper">
        <div class="panel-head">
          <h2 class="heading-1">
            Đăng ký
          </h2>
          <div class="description">Chào mừng bạn đến với hệ thống <br> <span>VUEJS SYSTEM</span> </div>
        </div>
        <form @submit.prevent="register" class="panel-body">
          <div class="form-row mb-20">
            <div class="label">Họ và tên</div>
            <input v-model="formData.fullName" type="text" name="fullName" id="fullName" class="input-text" autocomplete="off">
          </div>
          <div class="form-row mb-20">
            <div class="label">Tên đăng nhập</div>
            <input v-model="formData.username" type="text" name="username" id="username" class="input-text" autocomplete="off">
          </div>
          <div class="form-row mb-20">
            <div class="label">Email</div>
            <input v-model="formData.email" type="email" name="email" id="email" class="input-text" autocomplete="off">
          </div>
          <div class="form-row mb-20">
            <div class="label">Mật khẩu</div>
            <input v-model="formData.password" type="password" name="password" id="password" class="input-text" autocomplete="off">
          </div>
          <div class="form-row mb-20">
            <div class="label">Địa chỉ</div>
            <input v-model="formData.address" type="text" name="address" id="address" class="input-text" autocomplete="off">
          </div>
          <div class="form-row mb-20">
            <div class="label">Số điện thoại</div>
            <input v-model="formData.phone" type="tel" name="phone" id="phone" class="input-text" autocomplete="off">
          </div>
          <div class="form-row mb-20">
            <button type="submit" class="uk-button btn-register">Đăng ký</button>
          </div>
        </form>
        <div class="panel-root">
          <span>
            Already have an account? 
          </span>
          <router-link :to="{ name: 'login' }">Đăng nhập</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .register-container {
      padding-top: 80px;
    }
  
    .register-wrapper {
      position: relative;
      width: 410px;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 0 0.125rem 0 rgba(10, 10, 10, .04);
      padding: 48px;
      background: #fff;
    }
  
    .register-container .panel-head {
      text-align: center;
      margin-bottom: 20px;
    }
  
    .register-wrapper .heading-1 {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 24px;
    }
  
    .register-container .description {
      font-size: 15px;
      color: #000;
    }
  
    .register-container .description span {
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
      color: rgb(89, 144, 239);
    }
  
    .btn-register {
      background: rgb(89, 144, 239);
      width: 100%;
      border-radius: 5px;
      height: 40px;
      color: #fff;
    }
  
    .register-wrapper .panel-root {
      text-align: center;
    }
  
    .register-wrapper .label {
      font-weight: 500;
      margin-bottom: 5px;
      color: #000;
    }
  
    .form-row .forgot {
      color: rgb(89, 144, 239);
      font-size: 13px;
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
          fullName: "",
          username: "",
          email: "",
          password: "",
          address: "",
          phone: "",
        },
      };
    },
    methods: {
      async register() {
        try {
          const response = await AuthorizationServiceAdmin.submitRegister(this.formData);
          switch (response.data) {
            case "user exists":
              // User already exists
              toast.error("Người dùng đã tồn tại. Vui lòng kiểm tra lại thông tin và thử lại.", {
                autoClose: 800,
              });
              break;
            case "success":
              // Registration successful
              toast.success("Đăng ký thành công", {
                autoClose: 800,
              });
              setTimeout(() => {
                this.$router.push({ name: "register" });
              }, 1500);
              break;
            default:
              break;
          }
        } catch (error) {
          console.log(error);
          toast.error("Registration failed. Please check your input and try again.", {
            autoClose: 800,
          });
        }
      },
    },
  };
  </script>
  