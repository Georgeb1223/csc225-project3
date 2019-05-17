$('#inch').on("submit",function(e){
    e.preventDefault();
    var inches = $('#inputIn').val();
    axios.get("http://statenweb.mockable.io/conversions/")
        .then(function(response){
            var conversion = response.data.centimetersInInch;
            var ans = conversion * inches;
            $('#inchAns').html(ans+" centimeters");
        })
})
$('#centimeter').on("submit",function(e){
    e.preventDefault();
    var centimeter = $('#inputCm').val();
    axios.get("http://statenweb.mockable.io/conversions/")
        .then(function(response){
            var conversion = response.data.inchesInCm;
            var ans = conversion * centimeter;
            $('#centiAns').html(ans+" inches");
        })
})