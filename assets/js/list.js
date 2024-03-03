$("form").bind("keypress", function (a) { return 13 == a.keyCode ? !1 : void 0 });

new List('list-id', {
    valueNames: ['names', 'address'],
    fuzzySearch: {
        searchClass: "fuzzy-search",
        location: 0,
        distance: 100,
        threshold: 0.4,
        multiSearch: true
    }
});
