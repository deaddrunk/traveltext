if (window.modApplied == true) {
    alert("Mod is already applied");
} else if (window.modsApplied == undefined) {
    window.modApplied = true;
    modRun();
}

function modRun() {
    // TODO: find a better way to do this (import stylesheet file from extension storage?)
    const css = `
        .typeout {
            display: grid;
            justify-items: center;
            overflow: hidden;
            animation: typing 1.5s steps(50);
            letter-spacing: 0.1em;
            white-space: nowrap;
        }

        @keyframes typing {
            from {
                width: 0;
            }

            to {
                width: 100%;
            }
        }
    `;

    const root = $("div.p-5.bg-white.z-30").parent();
    root.append(`<style>${css}</style>`);

    const clone = $("div.p-5.bg-white.z-30").clone();

    clone.empty();
    clone.append(
        "<div class='typeout text-base font-medium text-gray-900 dark:text-gray-300'>Welcome to TravelText</div>"
    );

    clone.attr("id", "rootMenu");
    clone.css("display", "grid");
    clone.css("justify-content", "center");
    clone.css("margin-top", "5");

    root.children().hide();
    root.append(clone);

    // // TODO: don't use THESE many fucking classes for input (find a way to generalize them)
    inputTemplate = (id, placeholder) => {
        return `<input style="color: white; background-color: #262626; margin-top: 5px;" placeholder="${placeholder}" id="${id}" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5">`;
    };

    clone.append(inputTemplate("travelMenu", "Travel text"));
    clone.append(inputTemplate("goldMenu", "Gold"));
    clone.append(inputTemplate("levelMenu", "Level"));
    clone.append(
        `<button id="rndBtn" class="h-10 inline-flex shadow-sm text-xs sm:text-sm w-full items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white">Random Levelbar Progress</button>`
    );

    clone.append(inputTemplate("stepBoost", "Step speed boost"));
    clone.append(inputTemplate("goldBoost", "Gold boost"));
    clone.append(inputTemplate("rarityBoost", "Rarity boost"));
    clone.append(inputTemplate("expBoost", "Experience boost"));

    const travelTextSpan = $(".travel-text");
    $("#travelMenu").val(travelTextSpan.text());
    $("#travelMenu").bind("input", function () {
        array = $(this).val().split(" ");
        travelTextSpan.empty();

        for (i in array) {
            travelTextSpan.append(`<span class="letter">${array[i]}</span>`);
            travelTextSpan.append(" ");
        }
    });

    const gold = $(`span[x-text="user.gold"]`);
    $("#goldMenu").val(gold.text());
    $("#goldMenu").bind("input", function () {
        gold.text($(this).val());
    });

    const level = $(`span[x-text="user.level"]`);
    $("#levelMenu").val(level.text());
    $("#levelMenu").bind("input", function () {
        level.text($(this).val());
    });

    $("#rndBtn").click(function () {
        $(".rounded-b-lg.rounded-tr-lg").css(
            "width",
            Math.floor(Math.random() * 100) + 1 + "%"
        );
    });
    const inputs = [
        {
            id: "stepBoost",
            label: "Step Speed",
        },
        {
            id: "goldBoost",
            label: "Gold",
        },
        {
            id: "rarityBoost",
            label: "Rarity Rate",
        },
        {
            id: "expBoost",
            label: "EXP",
        },
    ];

    for (var i = 0; i < inputs.length; i++) {
        $(`#${inputs[i]["id"]}`).val(
            $(`span[x-text="boost.name"]:contains("${inputs[i]["label"]}")`)
                .parent()
                .find(`span[x-text="boost.value"]`)
                .text()
        );

        $(`#${inputs[i]["id"]}`).attr("x-label", inputs[i]["label"]);
        $(`#${inputs[i]["id"]}`).bind("input", function () {
            const el = $(
                `span[x-text="boost.name"]:contains("${$(this).attr(
                    "x-label"
                )}")`
            );

            if (Number($(this).val()) > 0) {
                el.parent().show();
                el.parent()
                    .find(`span[x-text="boost.value"]`)
                    .text(Number($(this).val()));
            } else {
                el.parent().hide();
            }
        });
    }
}
