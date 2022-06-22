<template>


<div class="row">
    <div class="columnC" id="column5">
        <div class="logo">
        <img src="../assets/Assignment.jpg" id="logoo">
    </div>
        <div class="signin">
            <input type="text" v-model="username" placeholder="Username"/>
            <input type="text" v-model="password" placeholder="Password"/>
            <button v-on:click="signin">Sign In</button>

        <div class="registerandforgotpassword">
            <table class="rf_text">
                <tr>
                    <td>
                        <div class = "register">
                            <h4 id="register_text">Sign up</h4>
                        </div>
                    </td>
                    <td>
                        <div class = "forgotpassword?">
                            <h4 id="forgotpassword_text">Forgot password</h4>
                        </div>
                    </td>
                </tr>
            </table>

        </div>

        </div>
    </div>

</div>

<div class="footer" id="signin_footer">
    <h3 id="assign_text1">Assign, powered by J softwares</h3>
</div>

</template>

<script>
export default {
    name: 'CurrentUser'

}
</script>

<style>

.btn {
  background-color: seagreen;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
}


#logoo {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-top: 10px;
}
.signin input{
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
.signin button {
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
.columnC {
    margin-right: auto;
    margin-left: auto;
    width: 33.33%;
    padding: 15px;
    margin-top: 130px;
    border-radius: 12px;
    background-color: #42b983;
    box-shadow: 10px 10px 5px grey;

}

@media screen and (max-width: 600px){
    .column {
        width: 100%;
    }
}
#signup_text {
    color: grey;
}

table, td {
  border: 0px;
}

.register {
    text-align: left;
}
#register_text {
    text-shadow: 2px 2px 10px black; 
}

.forgotpassword {
    text-align: right;  
}
#forgotpassword_text {
    text-shadow: 2px 2px 10px black; 
    margin-left: 54%;
}
#assign_text1 {
    text-shadow: 4px 4px 4px grey;   
}

#signin_footer {
    margin-top:120px;
    background-color: white;
    
}   

</style>