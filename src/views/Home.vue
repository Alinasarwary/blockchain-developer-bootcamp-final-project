<template>
    <div>
        <p class="para">If you don't have MetaMask account please Login.</p><br>
        <p class="para">You must first install <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">MetaMask</a> Extension.</p><br>
        <p class="para">For more information please check about page.</p><br>
        <v-btn class="btn" id="button"><router-link to="/add">let's Go --></router-link></v-btn>

    </div>
</template>

<script>

</script>
<style>
#button{
    background-color: rgba(0, 4, 255, 0.589);
    color: white;
}
.para{
    font-size: 20px;
    text-align: center;
    color: rgba(248, 247, 247, 0.74);
}
</style>
