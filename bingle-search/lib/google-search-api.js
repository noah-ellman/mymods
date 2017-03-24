const GoogleSearch = require('wko-google-search');
const googleSearch = new GoogleSearch({
    key: 'AIzaSyBLYPC8T5w1S-mnxG2xU5SrJQb0JOF4g9k',
    cx: '002201091616557569186:ie9zmupj0pa'
});




function search(query, options, callback) {


    googleSearch.fetch(query, (err, hits) => {
        console.log(hits);

        const data = [];

        hits.forEach( v => {
            data.push(
                {
                    title: v.title,
                    href: v.link,
                    desc: v.snippet
                }
            )
        });

        return callback(data);
    });




}


module.exports.search = search;