$(document).ready(function () {
        $.urlParam = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return results[1] || 0;
        }
        $(function () {
            var id = $.urlParam('id');
            var url = "http://localhost:3000/postIT/?id=" + id;
            console.log(url);
            $.get(url, function (inf, status) {
                $("#userInput").val(inf[0].userInput);
                $("#actor").val(inf[0].actor);
                $("#date").val(inf[0].date);
                $("#id").val(inf[0].id);
                $("#save").click(function () {
                    var newuser = {};
                    newuser.userInput = $("#userInput").val();
                    newuser.actor = $("#actor").val();
                    newuser.date = $("#date").val();
                    newuser.id = $("#id").val();
                    console.log(JSON.stringify(newuser));
                    var updateUrl = "http://localhost:3000/postIT/" + inf[0].id;
                    $.ajax({
                        url: updateUrl,
                        type: 'PUT',
                        data: newuser,
                        success: function (result) {
                            console.log('Updated!');
                        }
                    });
                    setTimeout(window.location.href = "index.html", 1000);
                });
            });
        });
});
