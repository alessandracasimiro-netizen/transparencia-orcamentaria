/*
==========================================================
Portal Gestão, Transparência e Informações
IFSP - Campus Bragança Paulista
==========================================================
*/

document.addEventListener("DOMContentLoaded", function () {

    // Rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(function(link){

        link.addEventListener("click", function(e){

            const destino = document.querySelector(this.getAttribute("href"));

            if(destino){

                e.preventDefault();

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});
