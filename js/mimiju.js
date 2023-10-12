var rule = {
            title:'迷迷劇',
            host:'https://mimiju.com/',
            url: '/vodshow/fyfilter.html',
            searchUrl: '/vodsearch/**----------fypage---.html',
            searchable: 1,//是否启用全局搜索,
            quickSearch: 1,//是否启用快速搜索,
            filterable: 1,//是否启用分类筛选,
            filter_url:'{{fl.cateId}}--{{fl.by}}---{{fl.letter}}---fypage---.html',
            filter: {
            	"20":[{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}]
            	/*"21":[{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}],
            	"22":[{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}],
            	"23":[{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}],
            	"24":[{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"按時間","v":"time"},{"n":"按人氣","v":"hits"},{"n":"按評分","v":"score"}]}]*/
    },
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
          filter_def:{
		20:{cateId:'20'}
		/*21:{cateId:'21'},
	        22:{cateId:'22'},
	        23:{cateId:'23'},
                24:{cateId:'24'}*/
	},
            class_name:'短劇', 
	    class_url:'20',
            play_parse: true,
            lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            input
        }
    `,
            limit: 6,
            推荐: 'li.hl-col-xs-4;li;*;*;*;*',
            double: true, // 推荐内容是否双层定位
            一级: 'li.hl-col-xs-4;a&&title;.hl-lazy&&data-original;.remarks&&Text;a&&href',
            二级: {
                "title": "h2&&Text;.hl-col-xs-12--em:eq(2)&&Text",
                "img": ".hl-lazy&&data-original",
                "desc": ".hl-col-xs-12--em:eq(2)&&Text;.hl-col-xs-12.hl-col-sm-4--em:eq(0)&&Text;.hl-col-xs-12.hl-col-sm-4--em:eq(1)&&Text;.hl-col-xs-12--em:eq(3)&&Text;.hl-col-xs-12--em:eq(4)&&Text",
                "content": "li.hl-col-xs-12.blurb--em&&Text",
                "tabs": "a.hl-tabs-btn",
                "lists": "#hl-plays-list:eq(#id) li"
            },
            搜索: 'li.hl-list-item.hl-col-xs-12;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
}