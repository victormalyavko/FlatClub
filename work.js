/*function z1() {
 var myWindow1 = window.open("https://goppa.benivo.com/Admin/User/editprofile/277522");

 myWindow1.onload = function () {
 //click suggest tab
 myWindow1.alert("hi!");

 };

 myWindow1.postMessage("hi", "*");
 }

 chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
 // sendResponse({farewell:"goodbye"}, function () {
 alert("3432");
 z1();
 // });
 });*/


window.opener.postMessage("hi", "*");

var contains = function (needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if (!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (needle) {
            var i = -1, index = -1;

            for (i = 0; i < this.length; i++) {
                var item = this[i];

                if ((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function z1() {
    var array = event.data;
    console.log(array);

    $("ul li a[href='#dashboard-suggest']")[0].click();

    var allFlatIds = [];

    for (var i = 0; i < array.length; i++) {
        $("input[class='flatID']").each(function (index, value) {
            allFlatIds.push($(value).val());
        });
        console.log(allFlatIds);
        if (!contains.call(allFlatIds, array[i])) {
            $("button:contains('Add internal property')")[0].click();
            sleep(2000);
            $("li[class='ui-droppable fc-new-property'] input[class='flatID']").val(array[i]);
            sleep(2000);
            $("li[class='ui-droppable fc-new-property'] button[class='btn btn-primary fc-internal-save']")[0].click();
            sleep(2000) ;
        }
        allFlatIds = [];
    }
    array = [];
}

function listener(event) {
    z1();
    return;
}

if (window.addEventListener) {
    window.addEventListener("message", listener);
} else {
    // IE8
    window.attachEvent("onmessage", listener);
}