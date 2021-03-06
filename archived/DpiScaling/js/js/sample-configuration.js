//// Copyright (c) Microsoft Corporation. All rights reserved

(function () {
    "use strict";

    var sampleTitle = "DPI scaling";

    var scenarios = [
        { url: "/html/scenario1.html", title: "Load images for different scales" },
        { url: "/html/scenario2.html", title: "Override default scaling of UI elements" }
    ];

    WinJS.Namespace.define("SdkSample", {
        sampleTitle: sampleTitle,
        scenarios: new WinJS.Binding.List(scenarios)
    });
})();
