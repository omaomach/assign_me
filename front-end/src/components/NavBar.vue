<template>
<div class="navbar">
    <div class="icon_buttons">
        <button class="btn" id="btn_home"><i class="fa fa-home" id="user_home"></i> Assign</button>
        <button class="btn"><i class="fa fa-user" id="user_icon"></i></button>
        <button class="btn" id="btn_bell"><i class="fa fa-bell" id="user_bell"></i></button>
        <button class="btn" id="btn_angle"><i class="fa fa-angle-down" id="user_angle"></i></button>
        
    </div>

</div>
<div class="header">
    <h3>Want your Assignment done. Just assign it to me!!!</h3>
</div>

<div class="row">

    <div class="column" id="column2">
        
    </div>

    <div class="column" id="column1">
        <div class="logo">
            <img src="../assets/Assignment.jpg" id="logoo">
        </div>
        <div class="assign">
            <input type="text" v-model="email" placeholder="Assignee Email"/>
            <input type="text" v-model="phone_number" placeholder="Assignee Phone Number"/>
            <input type="text" v-model="unit" placeholder="Assignment Unit"/>
            <input type="text" placeholder="Assignee Code"/>
            <button v-on:click="assign">Assign</button>

        </div>
    </div>

    <div class="column" id="column3">
        <table>
        <tr>
        <td><button class='btn' id="add"><i class='far fa-plus-square' id="add_icon"></i>Add new project</button></td></tr>
        <tr><td><button class='btn' id="ongoing"><i class='far fa-folder-open' id="ongoing_icon"></i>Ongoing projects</button></td></tr>
        <tr><td><button class='btn' id="ongoing"><i class='fas fa-blind' id="blind_icon"></i>Confirm progress</button></td></tr>
        <tr><td><button class='btn' id="completed"><i class='far fa-folder' id="completed_icon"></i>Completed projects</button></td></tr>
        <tr><td><button class='btn' id="cancel"><i class='far fa-file-excel' id="cancel_icon"></i>Cancel project</button></td></tr>
        </table>
    </div>

</div>

<div class="footer">
    <div class="search_assignment">
        <form action="/action_page.php">
        <input type="text" placeholder="Search..." id="search_input">
        <button type="submit" id="btn_submit"><i class="fa fa-search" id="user_search"></i></button>
        </form>
        
    </div>

</div>


</template>

<script>
export default {
    name: 'NavBar',

}
</script>

<style>
.navbar {
    background-color: #42b983;
    padding: 15px;
    border-radius: 12px;
    color: #ffffff;
    position: fixed;
    margin-top: 10px;
    width: 97%;
    top: 0%;
    
    
}
.btn {
  background-color: seagreen;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
}

#user_icon {
    color: #ffffff; 
}
#user_bell {
    color: #ffffff;
}
#user_angle {
    color: #ffffff;
}
#user_home {
    color: #ffffff;
}

#btn_angle {
    border-radius: 50%;
    float: right;
}
#btn_bell {
    border-radius: 50%;
}
#btn_home {
    border-radius: 12px;
    color: #ffffff;
    float: left;
    margin-left: 0px;
}
#add {
    border-radius: 12px;
    color: #ffffff;
    padding: 8px 32px;
    margin-left: auto;
    margin-right: auto;
}
#completed {
    border-radius: 12px;
    color: #ffffff;
    padding: 8px 20px;
    margin-left: auto;
    margin-right: auto;
}
#cancel {
    border-radius: 12px;
    background-color: red;
    color: #ffffff;
    padding: 8px 38.5px;
    margin-left: auto;
    margin-right: auto;
}
#add_icon {
    margin-right: 5px;
}
#ongoing {
    border-radius: 12px;
    color: #ffffff;
    padding: 8px 26px;
    margin-left: auto;
    margin-right: auto;
}
#ongoing_icon {
    margin-right: 5px;
}
#blind_icon {
    margin-right: 5px;
}
#completed_icon {
    margin-right: 5px;
}#cancel_icon {
    margin-right: 5px;
}
.icon_buttons {
    text-align: right;
    margin-top: 0px;
}

.header {
  background-color: #ffffff;
  margin-top: 100px;
  text-align: center;
}
#logoo {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-top: 10px;
}
.assign input{
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

.assign button {
    width: 200px;
    height: 35px;
    border: 1px solid lightseagreen;
    background: seagreen;
    cursor: pointer;
    color: whitesmoke;
    margin-top: 25px;
    margin-bottom: 10px;
    border-radius: 12px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
    

}
.column {
    float: right;
    width: 33.33%;
    padding: 15px;
    border-radius: 12px;
    margin-top: 20px;
    background-color: #42b983;
}
#column3 {
    float: left;
    width: 16.85%;
    background-color: #D3D3D3;
    margin-top: 135px;
    margin-left: 90px;
    
}
#column2 {
    float: right;
    width: 26.85%;
    height: 420px;
    background-color: #D3D3D3;
    margin-top: 40px;
    margin-right: 8px;
    box-shadow: 10px 10px 5px grey;

}

#column1 {
    margin-right: 55px;
    box-shadow: 10px 10px 5px grey;

}

@media screen and (max-width: 600px){
    .column {
        width: 100%;
    }
}

h3 {
    margin: 40px 0 0;
    color: #42b983;

}
.footer {
    padding: 15px;
    background-color: #D3D3D3;
    border-radius: 12px;
    margin-top: 55px;
    width: 98%;
}
#user_search {
    color: #ffffff;
}
#btn_submit {
    background-color: seagreen;
    border-radius: 50%;
    padding: 6px 8px;
    margin-left: 5px;

}
#search_input {
    background-color: white;
    border: none;
    padding: 6px 8px;
    font-size: 16px;
    border-radius: 12px;
    cursor: pointer;
}
table {
    border: 0px solid white;
    border-radius: 12px;
    margin-left: auto;
    margin-right: auto;

}
td {
    border: 5px solid #D3D3D3;
    border-radius: 12px;
    
}  

</style>