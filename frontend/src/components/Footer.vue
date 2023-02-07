<template>
    <footer>
        
        <div class="footerComponents">
            <div class="footerLogoAndLink">
                <img class="footerLogo" :src="require('../assets/KVSUM-Logo.png')"/>
                <div class="footerLink"><router-link to="/aboutUs">O nama</router-link></div>
            </div>
            <div class="footerTextOne">
                <div>Sveučilište u Mostaru</div>
                <div>Fakultet strojarstva, računarstva i elektrotehnike</div>
                <div class="textPadding">Kampus u Rodoču,</div>
                <div>88000 Mostar,</div>
                <div>Bosna i Hercegovina</div>
            </div>
            <div class="footerTextTwo">
                <div><span>Email:</span><span class="spanFont"> test@gmail.com</span></div>
                <div><span>Telefon:</span><span class="spanFont"> 063/111-111</span></div>
                <div class="textPadding">PRATITE NAS NA </div>
                <div>DRUŠTVENIM MREŽAMA</div>
                <div class="footerMediaLink">
                    <div><a href="https://www.instagram.com/"><img class="footerIconLink" :src="require('../assets/instagramIcon.svg')"/></a></div>
                    <div><a href="https://www.facebook.com/"><img class="footerIconLink" :src="require('../assets/facebookIcon.svg')"/></a></div>
                </div>
            </div>
        </div>

        <div>
            <h4 class="footerCopyright">Copyright ©</h4>
        </div>

    </footer>
</template>


<script>

export default{
    name: 'Footer',
    components:{
    }
}
</script>


<style>
footer{
    background-color: #e6e6e6;
    margin-top: 20px;
    display: table;
    width: 100%;
}
.footerComponents{
    display: flex;
    place-content: center;
}
.footerLogoAndLink{
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    border-bottom: solid 1px;
}
.footerLogo{
    height: 80px;
    width: 80px;
}
.footerLink{
    text-align: center;
}
.footerTextOne{
    text-align: left;
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    border-bottom: solid 1px;
}
.footerTextTwo{
    text-align: right;
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 30px;
    padding-left: 200px;
    border-bottom: solid 1px;
}
.textPadding{
    padding-top: 30px;
}
.spanFont{
    font-weight: bold;
}
.footerMediaLink{
    padding-top: 5px;
    display: flex;
    float: right;
}
.footerIconLink{
    width: 40px;
    height: 40px;
    padding-left: 10px;
    padding-top: 5px;
}
.footerCopyright{
    place-content: center;
}
@media(max-width:900px){
    footer{
        display: none;
    }
}
</style>