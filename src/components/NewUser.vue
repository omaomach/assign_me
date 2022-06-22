<template>
<div class="row">
    <div class="columnB" id="column4">
        <div class="logo">
        <img src="../assets/Assignment.jpg" id="logoo">
        </div>
        <div class="signup">
            <input type="text" v-model="username" placeholder="Username"/>
            <input type="text" v-model="email" placeholder="Email"/>
            <input type="text" v-model="password" placeholder="Password"/>
            <button v-on:click="signup">Sign Up</button>

        </div>

        <div class="registerandforgotpassword">
            <table class="rf_text">
                <tr>
                    <td>
                        <div class = "register">
                            <h4 id="register_text">Sign in</h4>
                        </div>
                    </td>
                    <td>
                        <div class = "forgotpassword">
                            <h4 id="forgotpassword_text2">Forgot password</h4>
                        </div>
                    </td>
                </tr>
            </table>

        </div>

    </div>

    

</div>

<div class="footer" id="signup_footer">
    <h3 id="assign_text">Assign, powered by J softwares</h3>
</div>

</template>

<script>
export default {
    name: 'NewUser',

}
</script>

<style>




#logoo {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

.signup input{
  width: 300px;
  height: 40px;
  margin-top: 20px;
  display: block;
  border-radius: 12px;
  margin-bottom: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid seagreen;

}

.signup button {
    width: 200px;
    height: 35px;
    border: 1px solid lightseagreen;
    background: seagreen;
    cursor: pointer;
    color: whitesmoke;
    margin-top: 12px;
    margin-bottom: 10px;
    border-radius: 12px;
    
    
}

.row:after {
    content: "";
    display: table;
    clear: both;
    

}
.columnB {
    margin-right: auto;
    margin-left: auto;
    width: 33.33%;
    padding: 15px;
    border-radius: 12px;
    margin-top: 80px;
    background-color: #42b983;
    box-shadow: 10px 10px 5px grey;
    

}

@media screen and (max-width: 600px){
    .column {
        width: 100%;
    }
}
.registerandforgotpassword {
    padding: 0;
}
.rf_text {
    width: 100%;

}
table, td {
  border: 0px;
}

.register {
    text-align: left;
}
.forgotpassword {
    float: right;
}
#forgotpassword_text2 {
    text-shadow: 2px 2px 10px black; 
    margin-left: 0px;
}
#assign_text2 {
    text-shadow: 10px 10px 4px grey;   
}

#signup_footer {
    margin-top:122px;
    background-color: white;
    text-align: center;
}

</style>