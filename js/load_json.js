var user_lang = navigator.language || navigator.userLanguage;

function list_notes()
{
    var json_list = document.createElement('ul');
    json_list.classList.add("list-group");

    $.getJSON(
        "json/notes.json",
        function(result)
        {
            $.each(result, function(i, field){


                var item_href = document.createElement('a');
                item_href.href = "https://www.overleaf.com/read/" + i;
                item_href.target = "_blank";
                if (user_lang === "es"){
                    item_href.innerHTML = "Apuntes de " + field[0] + " - " + "Certamen " + field[1];
                } else {
                    item_href.innerHTML = "My \"" + field[0] + "\" notes - Test " + field[1];
                }


                var item = document.createElement('li');
                item.classList.add("list-group-item");
                item.appendChild(item_href);

                json_list.appendChild(item);

            });
        }
    );

    document.getElementById("notes_list").appendChild(json_list);

}