var countOfPages = parseInt($("li[title^='Page']:last>a").html());

function timeout() {
    setTimeout(function () {
        if ($("div[ng-hide='searchInProgress']:not(.ng-hide)").length != 0)
            return;
        timeout();
    }, 1000);
}

var arr = [];
for (var i = 0; i < countOfPages; i++) {
    $("div[class='col-md-6 col-lg-6 col-sm-12 col-xs-12 ng-scope'] .flat-container>a").each(function (index, value) {
        arr.push($(value).attr("href"));
    });
    $("li[title='Next Page']>a")[0].click();
    timeout();
}

console.log(arr.length);

// similar behavior as an HTTP redirect
for (var i = 0; i < arr.length; i++) {
    myWindow = window.open('https://www.flat-club.com' + arr[i]);
    //  window.location.href = 'https://www.flat-club.com' + arr[i];
    var valueOfLastCalendarUpdate = $("#flatViewHostInfo div:not([class]) span").parent().text().trim();
    if (valueOfLastCalendarUpdate.includes('Today') || valueOfLastCalendarUpdate.includes('This week') || valueOfLastCalendarUpdate.includes('Yesterday')) {
        arr[i]//add regex !
    }
    myWindow.close();
}

// $("div[class='col-md-6 col-lg-6 col-sm-12 col-xs-12 ng-scope'] .flat-container>a").each(function (index, value) {
//     console.log($(value).attr("href"))
// });
// $("li[title='Next Page']>a")[0].click();
// $("div[ng-hide='searchInProgress']:not(.ng-hide)")