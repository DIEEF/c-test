  // data source
  var data = [
    ['Contoso Florida', ...],
    ['Contoso New Jersey', ...],
    
  ];

  // pivot grid options
  var config = {
    dataSource: data,
    dataHeadersLocation: 'columns',
    theme: 'blue',
    toolbar: {
        visible: true
    },
    grandTotal: {
        rowsvisible: true,
        columnsvisible: true
    },
    subTotal: {
        visible: true,
        collapsed: true
    },
    fields: [
        { name: '0', caption: 'Entity' },
        { name: '1', caption: 'Product' },
        { name: '2', caption: 'Manufacturer', sort: { order: 'asc' } },
        { name: '3', caption: 'Class' },
        { name: '4', caption: 'Category', sort: { order: 'desc' } },
        { name: '5', caption: 'Quantity' },
        {
            name: '6',
            caption: 'Amount',
            dataSettings: {
                  aggregateFunc: 'avg',
                  formatFunc: function(value) {
                      return Number(value).toFixed(0);
                  }
            }
        }
    ],
    rows    : [ 'Manufacturer', 'Category' ],
    columns : [ 'Class' ],
    data    : [ 'Quantity', 'Amount' ],
    preFilters : {
        'Manufacturer': { 'Matches': /n/ },
        'Amount'      : { '>':  40 }
    },
    width: 1110,
    height: 645
  };

  // instantiate and show the pivot grid
  new orb.pgridwidget(config).
         .render(document.getElementById('pgrid'));
