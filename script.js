$(document).ready(function () {
    $('input[type="radio"][name="role"]').change(function () {
        const selectedColor = $('input[name="role"]:checked').val();
        if (selectedColor == 1) {
            $('#time').css({'width': '30%', 'background-color': 'rgb(197,156,59)'});
            $('#money').css({'width': '60%', 'background-color': 'rgb(190,232,74)'});
            $('#difficulty').css({'width': '40%', 'background-color': 'rgb(178,192,68)'});
            $('#scope').css({'width': '20%', 'background-color': 'rgb(203,36,35)'});
        }
        else if (selectedColor == 2) {
            $('#time').css({'width': '50%', 'background-color': 'rgb(170,225,84)'});
            $('#money').css({'width': '70%', 'background-color': 'rgb(133,228,97)'});
            $('#difficulty').css({'width': '50%', 'background-color': 'rgb(171,231,71)'});
            $('#scope').css({'width': '45%', 'background-color': 'rgb(195,229,75)'});
        }
        else if (selectedColor == 3) {
            $('#time').css({'width': '90%', 'background-color': 'rgb(217,43,37)'});
            $('#money').css({'width': '100%', 'background-color': 'rgb(111,224,78)'});
            $('#difficulty').css({'width': '95%', 'background-color': 'rgb(127,228,57)'});
            $('#scope').css({'width': '93%', 'background-color': 'rgb(128,227,78)'});
        }
    });
});