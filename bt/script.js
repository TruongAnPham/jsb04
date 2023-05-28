function min(so1, so2) {
    if(so1 < so2) { 
      return so1; 
    } else { 
      return so2; 
    }
  }

var showSearchAdvanceLink = document.getElementById("show_search_advance");
var searchAdvanceSection = document.getElementById("search_advance");
var categorySelect = document.getElementById("category");


showSearchAdvanceLink.addEventListener("click", function(event) {
  if (searchAdvanceSection.style.display === "none") {
    searchAdvanceSection.style.display = "tablerow";

    showSearchAdvanceLink.textContent = "Discard Advanced Search";
 }else{
    searchAdvanceSection.style.display = "none";
    showSearchAdvanceLink.textContent = "Advanced Search";

  }
  event.preventDefault();
});

  categorySelect.addEventListener("change", function() {
  console.log(categorySelect.value);
});

