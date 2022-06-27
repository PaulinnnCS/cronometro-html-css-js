let h = 0;
        let m = 0;
        let s = 0;

        let txt = document.getElementById('clock');

        let hms;

        function start_cron(){
            hms = setInterval(cron, 1000);
        }

        function pause_cron(){
            clearInterval(hms);
        }

        function stop_cron(){
            clearInterval(hms);
            h = 0;
            m = 0;
            s = 0;
            text();
        }

        function cron(){
            s++;
            text();
            if(s > 60){
                s = 0;
                m++;
                text();
                if(m > 60){
                    m = 0;
                    h++;
                    text();
                }
            }
        }

        function text(){
            txt.innerHTML = (h >= 10 ? h : `0${h}`) + ':' +
            (m >= 10 ? m : `0${m}`) + ':' + (s >= 10 ? s : `0${s}`);
        }