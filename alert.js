var countOfPages = parseInt($("li[title^='Page']:last>a").html());

function myTimeout(selector) {
    setTimeout(function () {
        if ($(selector).length != 0)
            return;
        else
            myTimeout(selector);
    }, 1000);
}

function collectAllFlatHrefs() {
    var arr = [];
    for (var i = 0; i < countOfPages; i++) {
        $("div[class='col-md-6 col-lg-6 col-sm-12 col-xs-12 ng-scope'] .flat-container>a").each(function (index, value) {
            arr.push($(value).attr("href"));
        });
        $("li[title='Next Page']>a")[0].click();
        myTimeout("div[ng-hide='searchInProgress']:not(.ng-hide)");
    }

    return arr;
}


function z(index) {
    if (index === countOfFlats) {
        z1();
        return;
    }

    var myWindow = window.open('https://www.flat-club.com' + arr[index]);

    myWindow.onload = function () {
        var valueOfLastCalendarUpdate = $('#flatViewHostInfo div:not([class]) span', myWindow.document).parent().text().trim();

        if (valueOfLastCalendarUpdate.includes('Today') || valueOfLastCalendarUpdate.includes('This week') || valueOfLastCalendarUpdate.includes('Yesterday')) {
            correctIds.push(arr[index]);//add regex !
        }

        myWindow.close();

        z(index + 1);
    };
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function waitForElement(window) {
    if (window.document.$("a[href='/Admin/User/']").parent().attr('class') === 'active')
        return;
    else
        sleep(1000);
}

function z1() {
    var myWindow1 = window.open('https://goppa.benivo.com/Admin/User/editprofile/' + '277522');
    waitForElement(myWindow1);
    myWindow1.close();
}

var arr = collectAllFlatHrefs();
var correctIds = [];
var countOfFlats;

if ((parseInt(myVar) == 0) || (parseInt(myVar) > arr.length))
    countOfFlats = arr.length;
else
    countOfFlats = parseInt(myVar);
z(0);
