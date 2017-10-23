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
        setTimeout(window.location.href = "index.html", 1000);
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
                    body += '<button type="button" class="button is-info is-outlined" style="width:100%;" onclick=edita(' + data[i].id + ') id="edit">Edit</button>';
                    body += '</p>';
                    body += '<p class="control">';
                    body += '<button type="button" class="button is-danger is-outlined" style="width:100%;" onclick=deldata(' + data[i].id + ') id="del">Delete</button>';
                    body += '</p>';
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
    
function deldata(id) {
    console.log(id);
    $.ajax({
        url: "http://localhost:3000/postIT/" + id,
        type: "DELETE",
        success: function (result) {
            console.log("Delete success");
            setTimeout(window.location.href = "index.html", 1000);
        }
    });
}

function edita(id) {
    var url = "http://localhost:3000/postIT/" + id;
    $.get(url, function (data, status) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/postIT/' + id,
            mimeType: 'json',
            success: function (info) {
                setTimeout(window.location.href = "edit.html?id=" + info.id, 30000);
            },
            error: function () {
                alert('Fail!');
            }
        });
    });
}  