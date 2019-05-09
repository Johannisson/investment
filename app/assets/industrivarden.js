var industrivarden_a = {
    id: 'industrivarden-a',
    name: 'Industrivärden',
    asset: 'Industrivärden A',
    ticker: 'INDU A',
    currency: 'sek',
    quantity: 0,
    xact: true,
    dividends: {
        april: 5.75
    },
    homepage: {
        name: 'www.industrivarden.se',
        url: 'http://www.industrivarden.se/'
    },
    years: [
        { year: 1998, ordinary: 1.88 },
        { year: 1999, ordinary: 2.25 },
        { year: 2000, ordinary: 2.50, extra: 0.50 },
        { year: 2001, ordinary: 2.50, extra: 1.70 },
        { year: 2002, ordinary: 2.50, extra: 1.68 },
        { year: 2003, ordinary: 2.50, extra: 4.00 },
        { year: 2004, ordinary: 2.75 },
        { year: 2005, ordinary: 3.00 },
        { year: 2006, ordinary: 1.75 },
        { year: 2007, ordinary: 2.25 },
        { year: 2008, ordinary: 5.00 },
        { year: 2009, ordinary: 4.50 },
        { year: 2010, ordinary: 3.00 },
        { year: 2011, ordinary: 4.00 },
        { year: 2012, ordinary: 4.50 },
        { year: 2013, ordinary: 5.00 },
        { year: 2014, ordinary: 5.50 },
        { year: 2015, ordinary: 6.25 },
        { year: 2016, ordinary: 5.00 },
        { year: 2017, ordinary: 5.25 },
        { year: 2018, ordinary: 5.50 },
        { year: 2019, ordinary: 5.75 }
    ]
};

var industrivarden_c = JSON.parse(JSON.stringify(industrivarden_a));
industrivarden_c.id = 'industrivarden-c';
industrivarden_c.asset = 'Industrivärden C';
industrivarden_c.ticker = 'INDU C';
industrivarden_c.quantity = 41;