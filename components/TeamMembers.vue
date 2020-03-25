<template>
    <section class="members">
        <div class="members__limit">
            {{ /*  HEADER  */ }}
            <header class="members__nav"> 
                <i class="icon" role="img"> 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.58715 10.8493C1.78767 11.6479 1.75637 13.2476 1.75811 13.558C1.76037 13.9389 2.06854 14.2608 2.44958 14.2608H2.47219C2.83028 14.2608 4.36731 14.2022 5.14905 13.4217C5.64244 12.9286 5.74609 12.4257 5.74609 12.0952C5.74609 11.6321 5.54731 11.1758 5.18609 10.8149C4.30575 9.9356 3.22175 10.2152 2.58715 10.8493ZM12.3803 3.62606C12.5908 3.83649 12.7108 4.12866 12.7108 4.42605C12.7108 4.72344 12.5908 5.01388 12.3803 5.22431C12.1699 5.43475 11.8777 5.55648 11.5803 5.55648C11.2829 5.55648 10.9925 5.43475 10.7821 5.22431C10.5716 5.01388 10.4499 4.72344 10.4499 4.42605C10.4499 4.12866 10.5716 3.83649 10.7821 3.62606C10.9908 3.41562 11.2829 3.29562 11.5803 3.29562C11.8777 3.29562 12.1699 3.41562 12.3803 3.62606ZM15.9561 0.67094C15.9274 0.33129 15.6567 0.0624213 15.3167 0.0361605C10.9247 -0.305577 7.76121 1.81998 5.80679 4.50466C4.72662 4.15075 3.56697 4.27701 2.50941 4.87283C1.49081 5.44657 0.623157 6.41335 0.0664637 7.59508C-0.0611879 7.86569 -0.00136212 8.1876 0.214985 8.39438C0.431158 8.60117 0.755504 8.64656 1.02002 8.50691C2.13376 7.9196 3.38784 8.03021 4.14088 8.78221L7.2073 11.8453C7.21287 11.8512 7.21669 11.858 7.22243 11.8639C7.97478 12.6154 8.08556 13.8674 7.49791 14.9792C7.35826 15.2437 7.40313 15.5681 7.60974 15.7844C7.74417 15.9253 7.92712 15.9999 8.11321 15.9999C8.21321 15.9999 8.31425 15.9784 8.40904 15.9338C9.59181 15.3777 10.5596 14.5109 11.1341 13.4933C11.7341 12.4304 11.8589 11.2641 11.4967 10.1791C12.2854 9.61299 12.9915 8.9749 13.5845 8.28273C15.4054 6.15753 16.2033 3.59667 15.9561 0.67094Z" fill="currentColor"/>
                    </svg>
                </i>

                <h2 class="members__title">
                    Team Members
                    <span class="members__sub-title">
                        Rocket
                    </span>
                </h2>

                <ul class="filter">
                    <li class="filter__item -is-active">
                        <a href="#all"> All </a>
                    </li>
                    <li class="filter__item">
                        <a href="#my-team"> My Team </a>
                    </li>
                </ul>
            </header>

            {{ /*  MEMBERS LIST  */ }}
            
            <div class="members__list">
                <div class="card">
                    <header class="card__header">
                        <h3 class="card__title"> Add New Member </h3>
                    </header>
                    <div class="card__body">
                        <form class="card__form" action="">
                            <fieldset class="upload">
                                <label for="upload_avatar"> Member Avatar </label>
                                <input id="upload_avatar" type="file" name="avatar" placeholder="Member Avatar">
                            </fieldset>

                            <input type="text" placeholder="Member Name" name="member_name">
                            <input type="text" placeholder="Member Email" name="member_email">
                            <input type="submit" value="Add" name="send">
                        </form>
                    </div>
                </div>

                <div class="card">
                    <div class="card__nav">
                        <a href="#favorite" class="favorite-btn"> Favorite Member </a>
                    </div>
                    <div class="card__body">
                        <figure class="card__avatar">
                            <img src="https://placedog.net/400/400" alt="Member Name">
                            <figcaption>
                                <h3 class="card__name"> Marie Walters </h3>
                                <span class="card__email"> mariewalters@gmail.com </span>
                            </figcaption>
                        </figure>
                    </div>
                    <footer class="card__footer">
                        <a href="#assign-member" class="assign-btn"> Assign </a>
                        <a href="#view-member" class="view-btn"> View </a>
                    </footer>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>

.members__limit{
    $padd: 32px;
    max-width: #{ 1312px + ( 2 * $padd ) };
    width: 100%;
    margin: 0 auto;
    padding: 32px;
}

.members__nav{
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .filter{
        @include only_mobile{
            width: 100%;
        }

        @include tablet_and_desk{
            margin-left: auto;
        }
    }

    .icon{
        margin-right: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        box-shadow: 0px 10px 20px rgba(80, 123, 252, 0.5);
        border-radius: 3px;
        background-color: $dodger-blue;
        color: $white;
    }
}

.members__title{
    font-family: $regular;
    font-size: 18px;
    line-height: 23px;
}

.members__sub-title{
    display: block;
    font-size: 12px;
    line-height: 15px;
    color: $manatee-gray;
}

.filter{
    display: flex;
    list-style: none;
    border: 1px solid #DEE1E6;
    box-sizing: border-box;
    border-radius: 100px;
}

.filter__item{
    a{
        @extend %btn;
        width: auto;
        min-width: 126px;
        background-color: transparent;
    }

    &.-is-active{
        
        a{
            color: $white;
            background-color: $dodger-blue;
        }
    }
}

.members__list{
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat( 4 , 1fr );
    grid-gap: 32px;
}

.card{
    background-color: $white;
    border-radius: 5px;
    padding: 25px 15px 15px;
    text-align: center;
}

.card__title{
    font-family: $regular;
    font-size: 16px;
    color: $ghost-gray;
}

.card__avatar{
    img{
        max-width: 100%;
    }
}

.card__form{
    .upload{
        
        label{
            display: block;
            width: 80px;
            height: 80px;
            text-indent: -99999px;
            box-shadow: 0px 2px 6px rgba(47, 83, 151, 0.1);
            margin: 50px auto 30px;
            border-radius: 100px;
            background: imgurl( 'user-icon.png' ) center center no-repeat;
            cursor: pointer;
            transition: box-shadow .4s ease-out;

            &:hover{
                box-shadow: 0px 4px 8px rgba(47, 83, 151, 0.3);
            }
        }

        input[type="file"]{
            display: none;
        }
    }

    input[type="text"]{
        @extend %input-text;
        text-align: center;
        border-radius: 100px;
        max-width: 200px;
        margin: 0 auto 10px;
    }

    input[type="submit"]{
        @extend %btn--blue;
        max-width: 150px;
        margin: auto;
    }
}

</style>
