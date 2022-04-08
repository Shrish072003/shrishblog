<template>
<div>
<header>
  <div class="contanier">
    <div class="hero">
      <div class="navbar">
       <nuxt-link to="/"><div class="logo">
        <img src="https://webmod.me/wp-content/uploads/2022/03/Untitled-design-3.png" alt="">
      </div></nuxt-link>
      <div class="right">
<nav id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
      
        <ul id="menu">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </nav>
      </div>
</div>
    </div>
</div>
  </header>
  <Nuxt/>
</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
body{
  font-family: 'Roboto';
}
.contanier{
position: absolute;
width: 100%;
height: 279px;
left: 0px;
top: 0px;

background: #F0A500;
}
.hero{
  position: fixed;
width: auto;
height: 55px;
left: 1.2em;
right: 1.2em;
top: 31px;
background: #FFFFFF;
border-radius: 50px;
} 
.logo img{
  position: fixed;
width: 75px;
height: 75px;
left: 56px;
top: 21px;
}

@media only screen and (min-width: 768px) {
header {
  padding: 1em 0;
  text-align: center;}

  .navbar {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover{
    color: #F0A500;
  }
  nav {
    display: flex;
  }
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
          padding-top: 0em;
    padding-right: 36px;
    }
      li {
        font-weight: normal;
        padding: 0;
        font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
    margin-right: 21px;

      }
input{
  opacity: 0%;
}
}

@media only screen and (max-width: 768px) {
  .navbar{
    justify-content: space-between;
  }
  .right{
    margin-left: 75%;
  }
.nav {
  background-color: #000000;
  height: 65px;
}


#menuToggle {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 18px;
  left: 20px;
  z-index: 0;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: flex;
  height: 15px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span
{
  display: flex;
  width: 29px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background: black;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 3px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 500% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -1px);
  background: black;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
    position: absolute;
    width: auto;
    height: px;
    margin: 0px 0 0 -259px;
    padding: 75px;
    border-radius: 20px;
    margin-top: 64px;
    background-color: white;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(0%, -130%);
    transition: transform 0.4s cubic-bezier(0.77,0.2,0.05,1.0);
}
#menu ul
{
  padding: 0;
}
#menu li
{
  padding: 16px 0;
  transition-delay: 2s;list-style: none;
  font-size: 25px;
}
#menu li a{
  text-decoration: none;
  color: #000000;
  
}
#menu li a:hover{
  text-decoration: none;
  color: #F0A500;
  
}
#menuToggle input:checked ~ ul
{
  transform: none;
}
}
</style>

