<template>
<div class="header">
    <div class="logo">
        <img src="../assets/Assignment.jpg" id="logoo">
    </div>

    <div class="home_button">
        <button class="btn" id="btn_home"><i class="fa fa-home" id="user_home"></i> Assign</button>
    </div>

    <div class="float_rightItems">
        <div class="theme_iconDiv">
            <button style='font-size:24px' id="theme_button"><i class='fas fa-toggle-on' id="theme_icon"></i></button>
        </div>
        <div class="search-container">
            <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" id="search_input">
            </form>
        </div>
        <div class="submit_buttonDiv">
            <button type="submit" id="search_button"><i class="fa fa-search" id="user_search"></i></button>
        </div>
    <div class="bell_div">
        <button class="btn" id="btn_bell"><i class="fa fa-bell" id="user_bell"></i></button>
    </div>
    <div class="profile_label">
        <span class="label success">Machoka</span>
    </div>
    <div class="user_div">
        <button class="btn" id="btn_user"><i class="fa fa-user" id="user_icon"></i></button>
    </div>

    </div>
    
    

</div>

<div class="div_body">
<div class="row">

    <div class="column" id="column1">
        
    </div>

    <div class="column" id="column3">    
        <div class="table_contents">
            <table>
            <tr><td><button class='btn' id="dashboard"><i class='fas fa-bullseye' id="bullseye_icon"></i>OverView</button></td></tr>
            <tr><td><button class='btn' id="completed_button"><i class='far fa-folder' id="completed_icon"></i>Completed projects</button></td></tr>
            <tr><td><button class='btn' id="cancel"><i class='far fa-file-excel' id="cancel_icon"></i>Cancelled projects</button></td></tr>
            <tr><td><button class='btn' id="chat_button"><i class='far fa-comments' id="chat_icon"></i> Chat</button></td></tr>
            <tr><td><button class='btn' id="notification_button"><i class='far fa-bell' id="notification_icon"></i>Notifications</button></td></tr>
        </table>
        </div>
    </div>

</div>

</div>

</template>

<script>

export default {
    name: 'DashBoard',

}

</script>

<style>
.header {
    background-color: #42b983;
    border-radius: 12px;
    margin-top: 5px;
    height: 118px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    box-shadow: 10px 10px 5px grey;
    
}

.logo {
    float: left;
    margin-left: 10px;
    }

.home_button {
    margin-top: auto;
    margin-bottom: auto;
}

#btn_home {
    border-radius: 12px;
    color: #ffffff;
    float: left;
    margin-left: 5px;
    padding: 10px 15.8px;
    
    
}

.float_rightItems {
    display: flex;
    margin-left: 53.2%;
}

.user_div {
    margin-top:auto;
    margin-bottom:auto;
    padding: 0px;
}
#user_icon {
    color: #ffffff; 
}
#btn_user {
    padding: 10px 15.8px;
    border-radius: 12px;
}
.profile_label {
    margin-top:auto;
    margin-bottom:auto;
    padding: 0px;
}
.label {
    color: white;
    padding: 8px;
    font-family: Arial;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    border-color:seagreen;
    margin-left: 7px;
}
.bell_div {
    margin-top:auto;
    margin-bottom:auto;
    padding: 0px;
}
#btn_bell {
    padding: 10px 15.8px;
    border-radius: 12px;
}
#user_bell {
    color: #ffffff;
   
}

.search-container {
    float: right;
    border-radius: 12px;
    margin-top:auto;
    margin-bottom:auto;
    color: #ffffff;
    padding: 8px 0px;
    overflow: hidden;
    outline: none;
  }

#search_input {
    border-radius: 12px;
    color: #ffffff;
    padding: 8px 0px;
    margin-right: 2px;

  }

.submit_buttonDiv {
    float: none;
    display: flex;
    text-align: left;
    color: #ffffff;
    /* width: 13%; */
    margin: 0;
    background-color: seagreen;
    padding: 0px;
    border-radius: 12px;
    margin-top: auto;
    margin-bottom: auto;
  }
#search_button {
    border-radius: 12px;
    padding: 8px 13px;
    border-color: seagreen;
    background-color: seagreen;
}
#user_search {
    color: #ffffff;
}
#search {
    background-color: white;
}
.theme_iconDiv {
    margin-top: auto;
    margin-bottom: auto;
    padding:0px;
    border-radius: 12px;
    margin-right: 7px;
}

#theme_button {
    border-radius: 50%;
    background-color: seagreen;
    border:seagreen;
    border-radius: 12px;
    padding: 4.5px 9.5px;

}
#theme_icon {
    color:#ffffff;
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
    margin-top: 11px;
    background-color: #42b983;
}
#column3 {
    float: left;
    width: 18.85%;
    background-color: #ffffff;
    margin-top: 20px;
    margin-left: 0px;
    
}


#column1 {
    width: 75%;
    height: 600px;
    margin-right: 5px;
    box-shadow: 10px 10px 5px grey;

}

@media screen and (max-width: 600px){
    .column {
        width: 100%;
    }
}
#completed_button {
    border-radius: 12px;
    color: #ffffff;
    padding: 8px 33px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 10px 10px 5px grey;

}
#cancel {
    border-radius: 12px;
    background-color: seagreen;
    color: #ffffff;
    padding: 8px 38.5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    box-shadow: 10px 10px 5px grey;

}
#bullseye_icon {
    margin-right: 5px;
}
#dashboard {
    border-radius: 12px;
    color: #ffffff;
    padding: 8px 67px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 10px 10px 5px grey;

}
#bullseye_icon {
    margin-right: 5px;
}
#completed_icon {
    margin-right: 5px;
}
#cancel_icon {
    margin-right: 5px;
}#cancel_icon {
    margin-right: 5px;
    background-color: red;
}
#chat_button {
    border-radius: 12px;
    background-color: seagreen;
    color: #ffffff;
    padding: 8px 85px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    box-shadow: 10px 10px 5px grey;

}
#notification_button {
    border-radius: 12px;
    background-color: seagreen;
    color: #ffffff;
    padding: 8px 61px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    box-shadow: 10px 10px 5px grey;

}
#notification_icon {
    margin-right: 5px;
}
.icon_buttons {
    text-align: right;
    margin-top: 0px;
    padding: 0;
}


</style>

