$.ajax({
    url: "categories.php",
    dataType: "json"
}).done(function(data) {
    let result = data;
    console.log(result);

    var template = document.querySelector("#categoryRowTemplate");
    var parent = document.querySelector("#tablebody");

    result.forEach(item => {
      
        let clone = template.content.cloneNode(true);
        clone.querySelector("td.tdid").textContent = item.Category_ID;
        clone.querySelector("td.tdname").textContent = item.Name;
        clone.querySelector("td.tddate").textContent = item.Date;

        parent.appendChild(clone);
    });
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("AJAX Error: " + textStatus, errorThrown);
});