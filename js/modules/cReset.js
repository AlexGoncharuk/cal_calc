define(
    $('.rbtn').on('click', function(){
        var rcl = function(){
            return [
                $('.wBread').val(''),
                $('.bBread').val(''),

                $('.buckwheat').val(''),
                $('.rise').val(''),
                $('.oatmeal').val(''),
                $('.wheat').val(''),
                $('.peas').val(''),
                $('.pasta').val(''),

                $('.breast').val(''),
                $('.liver').val(''),
                $('.heart').val(''),
                $('.egg').val(''),
                $('.wing').val(''),

                $('.potato').val(''),
                $('.tomato').val(''),
                $('.cucumber').val(''),
                $('.cabage').val(''),
                $('.onion').val(''),

                $('.peasS').val(''),
                $('.cabageS').val(''),
                $('.chickenS').val(''),
                $('.borscht').val(''),

                $('.protein').prop('value', ''),
                $('.fat').prop('value', ''),
                $('.carbohydrate').prop('value', ''),
                $('.kcals').prop('value', '')
            ];
        };
        rcl();
    })
);