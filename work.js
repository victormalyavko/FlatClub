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
    console.log(array + "array !!");
    console.log( "array !!");

    $("ul li a[href='#dashboard-suggest']")[0].click();

    var allFlatIds = [];

    for (var i = 0; i < array.length; i++) {
		sleep(3000);
        $("input[class='flatID']").each(function (index, value) {
            allFlatIds.push($(value).val());
        });
        console.log(allFlatIds + "Flat!!");
        console.log("Flat!!");
        if (!contains.call(allFlatIds, array[i])) {
            $("button:contains('Add internal property')")[0].click();
            $("li[class='ui-droppable fc-new-property'] input[class='flatID']").val(array[i]);
            $("li[class='ui-droppable fc-new-property'] button[class='btn btn-primary fc-internal-save']")[0].click();
        }
        allFlatIds = [];
    }
	close();
    array = [];
}


function listener(event) {
    z1();
}

if (window.addEventListener) {
    window.addEventListener("message", listener);
} else {
    // IE8
    window.attachEvent("onmessage", listener);
}
