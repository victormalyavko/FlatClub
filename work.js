var idList = [1, 2, 3]; //список переданных айдишников
var id = 123; //id пользователя из формы плагина
var url = "https://goppa.benivo.com/Admin/User/editprofile";
var fullUrl = url + id;

//click suggest tab
var tabLink = $("a:contains('Suggest')");
tabLink.click();

//click Add internal property button
var internalTab = $("button:contains('Add internal property')");
internalTab.click();

//get all ids from page
var newIdList;
var currentIdList = [];
while (true){
    var currentList = $('input[name="FlatId"]');
    currentList.forEach(function (element) {
        currentIdList.push(element.value)
    });
    window.scrollTo(0,document.body.scrollHeight);
    newIdList = $('input[name="FlatId"]');
    if (currentList.length === newIdList.length){
        break;
    }
}

//clean list
idList.forEach(function (id) {
    currentList.forEach(function (currentId) {
        if (id === currentId) {
            var i = idList.indexOf(id);
            if (i !== -1) {
                idList.splice(i, 1);
            }
        }
    });
});

//enter id from list to the field
idList.forEach(function (element) {
    var idField = document.evaluate('//*[@id="0"]/div/div[1]/div[2]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (idField !== null) {
        idField.defaultValue = element;
    }
    var btnSave = document.evaluate('//*[@id="0"]/div/div[3]/div[2]/div/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (btnSave !== null) {
        btnSave.click();
    }
    internalTab.click();
});
