if( p && f && ch && kl != 0){
    rasdm.push(p, f, ch, kl);

    var rasd = function(){

        var tot = function () {
            if(rasdm.length == 4) {
                return [
                    $('.t1').text(+(rasdm[0]).toFixed(2)),
                    $('.t2').text(+(rasdm[1]).toFixed(2)),
                    $('.t3').text(+(rasdm[2]).toFixed(2)),
                    $('.t4').text(+(rasdm[3]).toFixed(2))
                ];
            } else if(rasdm.length == 8){
                return [
                    $('.t1').text(+(rasdm[0] + rasdm[4]).toFixed(2)),
                    $('.t2').text(+(rasdm[1] + rasdm[5]).toFixed(2)),
                    $('.t3').text(+(rasdm[2] + rasdm[6]).toFixed(2)),
                    $('.t4').text(+(rasdm[3] + rasdm[7]).toFixed(2))
                ];
            } else if(rasdm.length == 12){
                return [
                    $('.t1').text(+(rasdm[0] + rasdm[4] + rasdm[8]).toFixed(2)),
                    $('.t2').text(+(rasdm[1] + rasdm[5] + rasdm[9]).toFixed(2)),
                    $('.t3').text(+(rasdm[2] + rasdm[6] + rasdm[10]).toFixed(2)),
                    $('.t4').text(+(rasdm[3] + rasdm[7] + rasdm[11]).toFixed(2))
                ];
            } else if(rasdm.length == 16){
                return [
                    $('.t1').text(+(rasdm[0] + rasdm[4] + rasdm[8]  + rasdm[12]).toFixed(2)),
                    $('.t2').text(+(rasdm[1] + rasdm[5] + rasdm[9]  + rasdm[13]).toFixed(2)),
                    $('.t3').text(+(rasdm[2] + rasdm[6] + rasdm[10] + rasdm[14]).toFixed(2)),
                    $('.t4').text(+(rasdm[3] + rasdm[7] + rasdm[11] + rasdm[15]).toFixed(2))
                ];
            } else if(rasdm.length == 20){
                return [
                    $('.t1').text(+(rasdm[0] + rasdm[4] + rasdm[8]  + rasdm[12] + rasdm[16]).toFixed(2)),
                    $('.t2').text(+(rasdm[1] + rasdm[5] + rasdm[9]  + rasdm[13] + rasdm[17]).toFixed(2)),
                    $('.t3').text(+(rasdm[2] + rasdm[6] + rasdm[10] + rasdm[14] + rasdm[18]).toFixed(2)),
                    $('.t4').text(+(rasdm[3] + rasdm[7] + rasdm[11] + rasdm[15] + rasdm[19]).toFixed(2))
                ];
            } else if(rasdm.length == 24){
                return [
                    $('.t1').text(+(rasdm[0] + rasdm[4] + rasdm[8]  + rasdm[12] + rasdm[16] + rasdm[20]).toFixed(2)),
                    $('.t2').text(+(rasdm[1] + rasdm[5] + rasdm[9]  + rasdm[13] + rasdm[17] + rasdm[21]).toFixed(2)),
                    $('.t3').text(+(rasdm[2] + rasdm[6] + rasdm[10] + rasdm[14] + rasdm[18] + rasdm[22]).toFixed(2)),
                    $('.t4').text(+(rasdm[3] + rasdm[7] + rasdm[11] + rasdm[15] + rasdm[19] + rasdm[23]).toFixed(2))
                ];
            }
        };

        tot();

        return [
            $('.11').text(rasdm[0]),
            $('.12').text(rasdm[1]),
            $('.13').text(rasdm[2]),
            $('.14').text(rasdm[3]),

            $('.21').text(rasdm[4]),
            $('.22').text(rasdm[5]),
            $('.23').text(rasdm[6]),
            $('.24').text(rasdm[7]),

            $('.31').text(rasdm[8]),
            $('.32').text(rasdm[9]),
            $('.33').text(rasdm[10]),
            $('.34').text(rasdm[11]),

            $('.41').text(rasdm[12]),
            $('.42').text(rasdm[13]),
            $('.43').text(rasdm[14]),
            $('.44').text(rasdm[15]),

            $('.51').text(rasdm[16]),
            $('.52').text(rasdm[17]),
            $('.53').text(rasdm[18]),
            $('.54').text(rasdm[19]),

            $('.61').text(rasdm[20]),
            $('.62').text(rasdm[21]),
            $('.63').text(rasdm[22]),
            $('.64').text(rasdm[23])
        ];
    };
    rasd();
}