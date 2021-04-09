function NL_landingPage_submit(userAction, target) {
    var form = document.getElementById('page-form');
    form = form ? form : document.forms[0];
    form.NL_landingPage_userAction.value = userAction;
    form.NL_landingPage_context.value = 'huSYy1ZXaKPemUQgDysrg8xEBFHfnmHnXmI4+WAOP4DaXalDnx5r3UzK9fII+4Y0wapv0Q==';
    if (target)
        form.target = target;
    form.submit();
}
document.addEventListener('DOMContentLoaded', function(event) {
    if (document.getElementById('name')) {
        document.getElementById('name').value = '';
    }
    if (document.getElementById('email')) {
        document.getElementById('email').value = '';
    }
    if (document.getElementById('mobilePhone')) {
        document.getElementById('mobilePhone').value = '';
    }
    if (document.getElementById('question1')) {
        document.getElementById('question1').value = '';
    }
    if (document.getElementById('response1')) {
        document.getElementById('response1').value = '';
    }
    if (document.getElementById('response2')) {
        document.getElementById('response2').value = '';
    }
    if (document.getElementById('response3')) {
        document.getElementById('response3').value = '';
    }

});