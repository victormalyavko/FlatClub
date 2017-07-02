window.opener.postMessage("hi", "*");

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function z1() {
    var array = event.data;

    if (array.length == 0) {
        window.alert("There are no Ids to add !");
        window.close();
        return
    }
    else {
        $("ul li a[href='#dashboard-suggest']")[0].click();

        var allFlatIds = [];
        $("input[class='flatID']").each(function (index, value) {
            allFlatIds.push($(value).val());
        });

        var valid = $(array).not(allFlatIds).get();
        var add = $("button:contains('Add internal property')")[0];

        console.log(valid + " data");
        var foo = document.getElementById('sortable1');

        var index = 0;
        var observer = new MutationObserver(
            function (mutations, obs) {
                mutations.forEach(function (mutation) {
                    var newNodes = mutation.addedNodes; // DOM NodeList
                    if (newNodes !== null) { //
                        console.log('  "' + newNodes + '" added');
                        console.log(index + " index");
                        console.log(valid[index] + " value");
                        $("li[class='ui-droppable fc-new-property'] input[class='flatID']").val(valid[index]);

                        var save = $("li[class='ui-droppable fc-new-property'] button[class='btn btn-primary fc-internal-save']")[0];
                        var saveObs = new MutationObserver(
                            function (sMutations, sObs) {
                                if (++index < valid.length) {
                                    add.click();
                                } else {
                                    obs.disconnect();
                                    window.alert("Flat Ids have been added !");
                                    window.close();
                                }
                                sObs.disconnect();
                            });
                        saveObs.observe(save, {attributes: true});
                        save.click();
                    }
                });
            }
        );

        observer.observe(foo, {childList: true});
        add.click();
        array = [];
    }
}

function listener(event) {
    console.log(window)
    window.removeEventListener("message", listener);
    z1();
}


window.addEventListener("message", listener);
