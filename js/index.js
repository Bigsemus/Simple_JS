function visitLink(path) {
	 let info = localStorage.getItem(path);
		localStorage.setItem(path, Number(info) +1)
	}


function viewResults(path) {
    var view = document.getElementsByClassName("mb-5")[1];
    view.innerHTML = '';
    for(var i = 0; i < 3; i++) {
        view.innerHTML = view.innerHTML + "page "+ (i+1) + " : " +
		localStorage.getItem(`Page${i + 1}`)+"<br>";
    }
}