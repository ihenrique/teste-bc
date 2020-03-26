<template>
    <header class="header">
        <button class="header__btn-menu"> 
            <i class="icon" role="img"> 
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title> 
                        Expandir Menu 
                    </title>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447716 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H9C9.55229 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H1Z" fill="currentColor"/>
                </svg> 
            </i> 
        </button>

        <h1 class="header__logo">
            <a href="/">
                <svg width="75" height="16" viewBox="0 0 75 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title> WoelFel </title>
                    <path d="M15.04 9.92L17.34 0.819999H20.58L16.72 15H13.46L10.44 5.6L7.4 15H4.08L0.22 0.819999H3.58L5.92 9.9L8.86 0.819999H12.1L15.04 9.92ZM25.8805 12.5C26.5071 12.5 27.0338 12.2867 27.4605 11.86C27.9005 11.4333 28.1205 10.82 28.1205 10.02C28.1205 9.22 27.9005 8.61333 27.4605 8.2C27.0338 7.77333 26.5071 7.56 25.8805 7.56C25.2671 7.56 24.7405 7.77333 24.3005 8.2C23.8605 8.62667 23.6405 9.23333 23.6405 10.02C23.6405 10.8067 23.8605 11.42 24.3005 11.86C24.7405 12.2867 25.2671 12.5 25.8805 12.5ZM25.8805 4.76C27.3871 4.76 28.6405 5.25333 29.6405 6.24C30.6538 7.22667 31.1605 8.48667 31.1605 10.02C31.1605 11.5533 30.6538 12.82 29.6405 13.82C28.6405 14.8067 27.3871 15.3 25.8805 15.3C24.3871 15.3 23.1338 14.8 22.1205 13.8C21.1071 12.8 20.6005 11.54 20.6005 10.02C20.6005 8.5 21.1071 7.24667 22.1205 6.26C23.1338 5.26 24.3871 4.76 25.8805 4.76ZM35.4173 8.84H39.3973C39.3707 8.38667 39.1907 7.99333 38.8573 7.66C38.5373 7.32667 38.0507 7.16 37.3973 7.16C36.8107 7.16 36.344 7.33333 35.9973 7.68C35.6507 8.02667 35.4573 8.41333 35.4173 8.84ZM39.6173 11.42L42.1573 12.14C41.904 13.06 41.3773 13.82 40.5773 14.42C39.7773 15.0067 38.7773 15.3 37.5773 15.3C36.1373 15.3 34.9107 14.82 33.8973 13.86C32.8973 12.9 32.3973 11.6133 32.3973 10C32.3973 8.45333 32.884 7.19333 33.8573 6.22C34.844 5.24667 36.0107 4.76 37.3573 4.76C38.904 4.76 40.1173 5.21333 40.9973 6.12C41.8907 7.01333 42.3373 8.26 42.3373 9.86C42.3373 10.3667 42.3173 10.68 42.2773 10.8H35.3573C35.384 11.3467 35.6173 11.8067 36.0573 12.18C36.4973 12.54 37.0173 12.72 37.6173 12.72C38.644 12.72 39.3107 12.2867 39.6173 11.42ZM47.3292 15H44.2892V0.519999H47.3292V15Z" fill="#507BFC"/>
                    <path d="M53.3919 15H50.2119V0.819999H59.3519V3.82H53.3719V6.82H58.6319V9.7H53.3919V15ZM63.0541 8.84H67.0341C67.0074 8.38667 66.8274 7.99333 66.4941 7.66C66.1741 7.32667 65.6874 7.16 65.0341 7.16C64.4474 7.16 63.9807 7.33333 63.6341 7.68C63.2874 8.02667 63.0941 8.41333 63.0541 8.84ZM67.2541 11.42L69.7941 12.14C69.5407 13.06 69.0141 13.82 68.2141 14.42C67.4141 15.0067 66.4141 15.3 65.2141 15.3C63.7741 15.3 62.5474 14.82 61.5341 13.86C60.5341 12.9 60.0341 11.6133 60.0341 10C60.0341 8.45333 60.5207 7.19333 61.4941 6.22C62.4807 5.24667 63.6474 4.76 64.9941 4.76C66.5407 4.76 67.7541 5.21333 68.6341 6.12C69.5274 7.01333 69.9741 8.26 69.9741 9.86C69.9741 10.3667 69.9541 10.68 69.9141 10.8H62.9941C63.0207 11.3467 63.2541 11.8067 63.6941 12.18C64.1341 12.54 64.6541 12.72 65.2541 12.72C66.2807 12.72 66.9474 12.2867 67.2541 11.42ZM74.9659 15H71.9259V0.519999H74.9659V15Z" fill="#5B6378"/>
                </svg>
            </a>
        </h1>

        <form class="search" @submit.prevent>
            <input autocomplete="off" placeholder="Search..." type="search" value="" @input="UpdateSearch">
        </form>

        <button class="user-menu">
            <figure class="user-menu__avatar">
                <img src="@/static/imgs/user.png" alt="Randall Cohen">
                <figcaption>
                    Randall Cohen
                </figcaption>
            </figure>
            <i class="icon" role="img">
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>
                        Opções do Usuário
                    </title>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.44115 6.3792C5.23701 6.3792 5.04169 6.29608 4.90022 6.14879L0.209605 1.27074C-0.0778356 0.97204 -0.0684544 0.496787 0.230432 0.209533C0.52913 -0.0777201 1.0042 -0.0685265 1.29145 0.23036L5.44115 4.54592L9.59084 0.23036C9.87791 -0.0683389 10.353 -0.0777201 10.6519 0.209533C10.9507 0.496787 10.9601 0.97204 10.6727 1.27074L5.98207 6.14879C5.8406 6.29608 5.64528 6.3792 5.44115 6.3792Z" fill="#BFC5D1"/>
                </svg>
            </i>
        </button>
    </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    computed: mapState([
        'search'
    ]),
    methods: {
        UpdateSearch (e){
            let app = this
            const term = e.target.value
            if( term.length > 3 ){
                app.$store.commit( 'search/update' , e.target.value )
            }else{
                app.$store.commit( 'search/update' , '' )
            }
        }
    }
}
</script>
<style lang="scss" scoped>

.header{
    display: flex;
    align-items: center;
    background-color: $white;
    height: 72px;
    padding: 0 24px;

    @include only_mobile{
        justify-content: space-between;
    }
}

.header__btn-menu{
    position: relative;
    height: 42px;
    width: 42px;
    border: 0;
    background-color: transparent;

    @include tablet_and_desk{
        margin-right: 22px;
    }
}

.header__logo{
    @include tablet_and_desk{
        margin-right: 58px;
    }
}

.search{
    
    @include only_mobile{
        display: none;
    }

    @include tablet_and_desk{
        margin-right: 58px;
        max-width: 800px;
        width: 100%;
    }

    input{
        @extend %input-text;
    }
}

.user-menu{
    display: flex;
    align-items: center;
    background: none;
    border: none;
    padding: 0;

    img{
        margin-right: 10px;
    }

    figure{
        display: flex;
        align-items: center;
    }

    figcaption{
        font-family: $regular;
        font-size: 14px;
        margin-right: 10px;
        white-space: nowrap;
        color: $ghost-gray;

        @include only_mobile{
            display: none;
        }
    }


    @include tablet_and_desk{
        width: 170px;
        margin-left: auto;
    }
}

</style>
