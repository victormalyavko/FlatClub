var countOfPages = parseInt($("li[title^='Page']:last>a").html());
if (typeof $("li[title^='Page']:last>a").html() === "undefined") {
    countOfPages = 0;
}
var myWindow1;


function timeout(selector) {
    setTimeout(function () {
        if ($(selector).length != 0)
            return;
        else
            timeout(selector);
    }, 200);
}

function collectAllFlatHrefs() {
    var arr = [];
    if (countOfPages == 0) {
        $("div[class='col-md-6 col-lg-6 col-sm-12 col-xs-12 ng-scope'] .flat-container>a").each(function (index, value) {
            arr.push($(value).attr("href"));
        });
    }
    else
        for (var i = 0; i < countOfPages; i++) {
            $("div[class='col-md-6 col-lg-6 col-sm-12 col-xs-12 ng-scope'] .flat-container>a").each(function (index, value) {
                arr.push($(value).attr("href"));
            });
            $("li[title='Next Page']>a")[0].click();
            timeout("div[ng-hide='searchInProgress']:not(.ng-hide)");
        }

    return arr;
}

window.addEventListener("message", function () {
    if (myWindow1) {
        myWindow1.postMessage(correctIds, "*");
    }
});

function z(index) {
    if (index === countOfFlats) {
        myWindow1 = window.open("https://goppa.benivo.com/Admin/User/editprofile/" + myVar1);
        return;
    }

    var myWindow = window.open('https://www.flat-club.com' + arr[index]);

    myWindow.onload = function () {
        var valueOfLastCalendarUpdate = $('#flatViewHostInfo div:not([class]) span', myWindow.document).parent().text().trim();

        console.log(valueOfLastCalendarUpdate)

        if (valueOfLastCalendarUpdate.indexOf('Today') !== -1 || valueOfLastCalendarUpdate.indexOf('This week') !== -1 || valueOfLastCalendarUpdate.indexOf('This week') !== -1) {
            correctIds.push(arr[index].match(/[0-9]+/g)[0]);//add regex !
        }

        myWindow.close();

        z(index + 1);
    };
}


var arr = collectAllFlatHrefs();
var correctIds = [];
var countOfFlats = 1;

if ((parseInt(myVar) == 0) || (parseInt(myVar) > arr.length))
    countOfFlats = arr.length;
else
    countOfFlats = parseInt(myVar);
z(0);

