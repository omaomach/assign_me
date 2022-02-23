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
            <h4 id="signin_text">Already have an account?</h4>

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
#signup_footer {
    margin-top:122px;
    background-color: white;
    
}
#assign_text {
    color: black;
    font-style: italic;
    text-shadow: 10px 10px 5px grey;

}
#signin_text {
    color: grey;
}

</style>