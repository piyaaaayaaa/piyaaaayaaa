*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

html{
    scroll-behavior: smooth;
}

::-webkit-scrollbar{
    width: 15px;
}

::-webkit-scrollbar-track{
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.25);
}

::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: linear-gradient(to top, #c72092 , #6c14d0);
}
#patos{
    padding: 100px;
    margin-top: -80px;
    
}
.container{
    background-color: white;
    display: flex;
}
.box2{
    background-color: violet;
    margin:auto;
}
section{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
}

section nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 8px rgba(0,0,0,0.6);
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

section nav .logo{
    font-size: 35px;
    color: #c72092;
    margin: 5px 0;
    cursor: pointer;
    position: relative;
    left: -4%;
}

section nav .logo span{
    color: #6c14d0;
    text-decoration: underline;
}

section nav ul{
    list-style: none;
}

section nav ul li{
    display: inline-block;
    margin: 0px 15px;
}

section nav ul li a{
    text-align: center;
    text-decoration: none;
    color: black;
    transition: 0.2s;
}

section nav ul li a:hover{
    color: #c72092;
}

section nav .icons i{
    margin: 30px 20px;
    margin-left: 15px;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s;
}

section nav .icons i:hover{
    color: #c72092;
}

section .main .main_content{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

section .main .main_content .main_text h1{
    font-size: 90px;
    line-height: 70px;
    font-family: pyxidium quick;
    background: linear-gradient(to right, #c72092,#6c14d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: 45px;
    left: 5%;
}

section .main .main_content .main_text h1 span{
    font-size: 70px;
    background: linear-gradient(to right, #c72092,#6c14d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

section .main .main_content .main_text p{
    width: 600px;
    text-align: justify;
    line-height: 21px;
    position: relative;
    top: 85px;
    left: 5%;
}

section .main .main_content .main_image img{
    width: 650px;
    position: relative;
    left: 20px;
    top: 75px;
}

section .main .social_icon{
    top: 50%;
    left: 98%;
    margin: 50px 30px;
    transform: translate(-50%,-50%);
    font-size: 19px;
}

section .main .social_icon i{
    margin: 20px 15px;
    margin-left: 15px;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s;
}

section .main .social_icon i:hover{
    color: #c72092;
}

section .main .button{
    position: absolute;
    left: 6%;
    padding: 10px 20px;
    border-radius: 30px;
    background: linear-gradient(to right,#c72092 , #6c14d0);
}

section .main .button a{
    color: white;
    text-decoration: none;
}

section .main .button i{
    color: white;
    margin-left: 5px;
    transition: 0.3s;
}

section .main .button:hover i{
    transform: translateX(6px);
}
.review{
    width: 100%;
    height: 100vh;
    padding-top: 80px;
}

.review h1{
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    text-transform: uppercase;
}

.review h1 span{
    background: linear-gradient(to left, #c72092 , #6c14d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 15px;    
}

.review .review_box{
    width: 95%;
    position: relative;
    top: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.review .profile .profile_image{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 5px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: 0.3s;
}

.review .profile .profile_image:hover{
    transform: scale(1.2);
}

.review .profile_image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
#uzi{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 5px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: 0.3s;
}
#frank{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 5px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: 0.3s;
}
#sza{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 5px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: 0.3s;
}
#weekend{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 5px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: 0.3s;
}
#brent{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 5px 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: 0.3s;
}
.review .profile{
    display: flex;
    align-items: center;
}

.review .review_box .review_card{
    width: 500px;
    background: #f3f1f1;
    padding: 20px 25px;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
.review_box1{
    width: 300px;
    height: 470px;
    background: #f3f1f1;
    padding: 20px 25px;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 0 10px rgba(235,9,182,0.3);
}
.review_box2{
    width: 300px;
    height: 350px;
    background: #f3f1f1;
    padding: 20px 25px;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 0 10px rgba(235,9,182,0.3);
}
.review_box3{
    width: 300px;
    height: 350px;
    background: #f3f1f1;
    padding: 20px 25px;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 0 10px rgba(235,9,182,0.3);
}
.review_box4{
    width: 300px;
    height: 350px;
    background: #f3f1f1;
    padding: 20px 25px;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 0 10px rgba(235,9,182,0.3);
}
.review_box5{
    left: 50%;
    width: 300px;
    height: 350px;
    background: #f3f1f1;
    padding: 20px 25px;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0 0 10px rgba(235,9,182,0.3);
}

.review .review_box .review_card .card_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.review .review_box .review_card .card_top .profile .name{
    margin-left: 20px;
    line-height: 22px;
}
#Review{
    margin-left: 500px;
    line-height: 22px;
    color: #c72092;
}
.review .review_box .review_card .card_top .profile .name strong{
    font-size: 20px;
}

.review .review_box .review_card .card_top .profile .name .like i{
    color: orange;
    display: inline-block;
    font-size: 12px;
}
.like{
    color: orange;
    font-size: 12px;
}


.review .review_box .review_card .comment p{
    text-align: justify;
    line-height: 22px;
    margin-top: 15px;
}
.revbox{
    display: flex;
}
