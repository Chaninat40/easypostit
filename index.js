$(document).ready(function () {
    console.log(moment().format('LLLL')); 
    var dates = moment().format('LLLL');
    var date = $("#date").val(dates);
});   

$("#create").click(function () {
    var newuser = {};
    newuser.userInput = $("#userInput").val();
    newuser.actor = $("#actor").val();
    newuser.date = $("#date").val();
    console.log(newuser);
    var url = "http://localhost:3000/postIT";
    $.post(url, newuser, function (data, status) {
        console.log("Inserted " + data);
    });
});

$(document).ready(function () {
    var url = "http://localhost:3000/postIT/";
    $.get(url, function (data, status) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/postIT/',
            mimeType: 'json',
            success: function (info) {
                $.each(info.slice(0, 7), function (i, info) {
                    var body = '<div class="row" style="margin: 20px">';
                    body += '<div id="postIt">';
                    body += '<div class=topBar> <center><b><span>#'+info.id+'</span> <span>'+info.actor+'</span></b></center>   </div>';
                    body += '<div class=form>';
                    body += '<div class=textAria>';
                    body += '<span>'+info.userInput+'</span>';
                    body += '<br><br><span>date: '+info.date+'</span>';
                    body += '</div>';
                    body += '</div>';
                    body += '</div>';
                    body += '<br>';
                    body += '<br>';
                    body += '<br>';
                    body += '<br>';
                    body += '<br>';
                    body += '<br>';
                    body += '<br>';
                    body += '<br>';
                    body += '<p></p>';
                    body += '</div><form metod="post">';
                    body += '<div class="row" style="margin: 20px">';
                    body += '<p class="control">';
                    body += '<a class="button is-danger">';
                    body += 'Edit';
                    body += '</a>';
                    body += '</p>';
                    body += '<a class="button is-success">';
                    body += '<span class="icon is-small">';
                    body += '<i class="fa fa-check"></i>';
                    body += '</span>';
                    body += '<span>Save</span>';
                    body += '<a type="button" class="button is-danger is-outlined" id="del">';
                    body += '<span>Delete</span>';
                    body += '<span class="icon is-small">';
                    body += '<i class="fa fa-times"></i>';
                    body += '</span>';
                    body += '</a>';
                    body += '</div>';
                    if (info.userInput != "" && info.actor != "" && info.date != "") {
                        $("#result").append(body);
                    }
                });
            },
            error: function () {
                alert('Fail!');
            }
        });
    });
});

$("#del").click(function () {
    var id = $.urlParam('id');
    var url = "http://localhost:3000/postIT/?id=" + id;
    $.ajax({
        type: 'DELETE',
        url: "http://localhost:3000/postIT/?id=" + id,
        mimeType: 'json',
        success: function (inf) {
            console.log('Delete!');
        }
    });
});






