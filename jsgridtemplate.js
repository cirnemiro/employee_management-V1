const jsgrid = {
    fields: [],
    data: [],

    autoload: false,
    controller: {
        loadData: $.noop,
        insertItem: $.noop,
        updateItem: $.noop,
        deleteItem: $.noop
    },

    width: "auto",
    height: "auto",

    heading: true,
    filtering: false,
    inserting: false,
    editing: false,
    selecting: true,
    sorting: false,
    paging: false,
    pageLoading: false, //should be true

    // rowClass: function (item, itemIndex) { ... },
    // rowClick: function(args) {... },
    // rowDoubleClick: function(args) {... },

    noDataContent: "Not found",

    confirmDeleting: true,
    deleteConfirm: "Are you sure?",

    pagerContainer: null,
    pageIndex: 1,
    pageSize: 20,
    pageButtonCount: 15,
    pagerFormat: "Pages: {first} {prev} {pages} {next} {last}    {pageIndex} of {pageCount}",
    pagePrevText: "Prev",
    pageNextText: "Next",
    pageFirstText: "First",
    pageLastText: "Last",
    pageNavigatorNextText: "...",
    pageNavigatorPrevText: "...",

    // invalidNotify: function(args) {... },
    // invalidMessage: "Invalid data entered!",

    loadIndication: true,
    loadIndicationDelay: 500,
    loadMessage: "Please, wait...",
    loadShading: true,

    updateOnResize: true,

    rowRenderer: null,
    headerRowRenderer: null,
    filterRowRenderer: null,
    insertRowRenderer: null,
    editRowRenderer: null
}

const field = {
    type: "",
    name: "",
    title: "",
    align: "",
    width: 100,
    visible: true,

    css: "table",
    headercss: "",
    filtercss: "",
    insertcss: "",
    editcss: "",

    filtering: true,
    inserting: true,
    editing: true,
    sorting: true,
    sorter: "string",

    // headerTemplate: function () { ... },
    // itemTemplate: function(value, item) {... },
    // filterTemplate: function() {... },
    // insertTemplate: function() {... },
    // editTemplate: function(value, item) {... },

    // filterValue: function() {... },
    // insertValue: function() {... },
    // editValue: function() {... },

    cellRenderer: null,

    validate: null
}
