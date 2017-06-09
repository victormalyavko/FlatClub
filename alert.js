var countOfPages = parseInt($("li[title^='Page']:last>a").html());

function timeout(selector) {
    setTimeout(function () {
        if ($(selector).length != 0)
            return;
        else
            timeout(selector);
    }, 1000);
}

function collectAllFlatHrefs() {
    var arr = [];
    for (var i = 0; i < countOfPages; i++) {
        $("div[class='col-md-6 col-lg-6 col-sm-12 col-xs-12 ng-scope'] .flat-container>a").each(function (index, value) {
            arr.push($(value).attr("href"));
        });
        $("li[title='Next Page']>a")[0].click();
        timeout("div[ng-hide='searchInProgress']:not(.ng-hide)");
    }

    return arr;
}


function z(index) {
    if (index === countOfFlats) {
        alert(correctIds);
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

var arr = collectAllFlatHrefs();
var correctIds = [];
var countOfFlats;

if ((parseInt(myVar) == 0) || (parseInt(myVar) > arr.length))
    countOfFlats = arr.length;
else
    countOfFlats = parseInt(myVar);
z(0);
