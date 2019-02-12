var investor_a = {
    id: 'investor-a',
    name: 'Investor',
    asset: 'Investor A',
    ticker: 'INVE A',
    currency: 'sek',
    quantity: 50,
    dividends: {
        may: 9.0,
        november: 4.0
    },
    homepage: {
        name: 'www.investorab.se',
        url: 'https://www.investorab.se/'
    },
    years: [
        { year: 1985, ordinary: 0.32 },
        { year: 1986, ordinary: 0.42 },
        { year: 1987, ordinary: 0.46 },
        { year: 1988, ordinary: 0.55 },
        { year: 1989, ordinary: 0.65 },
        { year: 1990, ordinary: 0.79 },
        { year: 1991, ordinary: 0.99 },
        { year: 1992, ordinary: 1.31 },
        { year: 1993, ordinary: 1.31 },
        { year: 1994, ordinary: 1.31 },
        { year: 1995, ordinary: 2.00 },
        { year: 1996, ordinary: 2.25, extra: 5.00, stocks: 2.63 },
        { year: 1997, ordinary: 2.50, stocks: 2.50 },
        { year: 1998, ordinary: 2.50 },
        { year: 1999, ordinary: 2.75 },
        { year: 2000, ordinary: 3.40 },
        { year: 2001, ordinary: 3.00, extra: 2.50 },
        { year: 2002, ordinary: 3.00, extra: 2.50 },
        { year: 2003, ordinary: 2.25, extra: 1.15 },
        { year: 2004, ordinary: 2.25 },
        { year: 2005, ordinary: 2.25 },
        { year: 2006, ordinary: 3.50 },
        { year: 2007, ordinary: 4.50 },
        { year: 2008, ordinary: 4.75 },
        { year: 2009, ordinary: 4.00 },
        { year: 2010, ordinary: 4.00 },
        { year: 2011, ordinary: 5.00 },
        { year: 2012, ordinary: 6.00 },
        { year: 2013, ordinary: 7.00 },
        { year: 2014, ordinary: 8.00 },
        { year: 2015, ordinary: 9.00 },
        { year: 2016, ordinary: 10.00 },
        { year: 2017, ordinary: 11.00 },
        { year: 2018, ordinary: 12.00 },
        { year: 2019, ordinary: 13.00 }
    ]
};

var investor_b = JSON.parse(JSON.stringify(investor_a));
investor_b.id = 'investor-b';
investor_b.asset = 'Investor B';
investor_b.ticker = 'INVE B';
