function toggleSection() {
            const section = document.getElementById('infoSection');
            const arrow = document.getElementById('arrow');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                arrow.textContent = '🔼';
            } else {
                section.style.display = 'none';
                arrow.textContent = '🔽';
            }
        }

        function toggleSection1() {
            const section = document.getElementById('infoSection1');
            const arrow = document.getElementById('arrow1');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                arrow.textContent = '🔼';
            } else {
                section.style.display = 'none';
                arrow.textContent = '🔽';
            }
        }
        function toggleSection2() {
            const section = document.getElementById('infoSection2');
            const arrow = document.getElementById('arrow2');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                arrow.textContent = '🔼';
            } else {
                section.style.display = 'none';
                arrow.textContent = '🔽';
            }
        }
        function toggleSection3() {
            const section = document.getElementById('infoSection3');
            const arrow = document.getElementById('arrow3');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                arrow.textContent = '🔼';
            } else {
                section.style.display = 'none';
                arrow.textContent = '🔽';
            }
        }
        function toggleSection4() {
            const section = document.getElementById('infoSection4');
            const arrow = document.getElementById('arrow4');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                arrow.textContent = '🔼';
            } else {
                section.style.display = 'none';
                arrow.textContent = '🔽';
            }
        }
        function toggleSection5() {
            const section = document.getElementById('infoSection5');
            const arrow = document.getElementById('arrow5');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                arrow.textContent = '🔼';
            } else {
                section.style.display = 'none';
                arrow.textContent = '🔽';
            }
        }
        function toggleSection6() {
            const section = document.getElementById('infoSection6');
            const arrow = document.getElementById('arrow6');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                arrow.textContent = '🔼';
            } else {
                section.style.display = 'none';
                arrow.textContent = '🔽';
            }
        }
        function toggleSection7() {
            const section = document.getElementById('infoSection7');
            const arrow = document.getElementById('arrow7');
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
                arrow.textContent = '🔼';
            } else {
                section.style.display = 'none';
                arrow.textContent = '🔽';
            }
        }
        window.addEventListener('load', function() {
            if (window.location.hash) {
                history.replaceState(null, null, ' ');
            }
        });
        window.onload = function() {
        window.scrollTo(0, 0);
        };
        window.onscroll = function() {
            const button = document.getElementById("backToTop");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                button.style.display = "flex";
            } else {
                button.style.display = "none";
            }
        };  
        document.getElementById("backToTop").addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        