var rule={
    title:'唐人街影视[飞]',
    host:'https://www.trjyy.com',
    //host:'https://www.tangrenjie.tv',
    // url:'/vod/show/id/fyclass/page/fypage.html',
    url:'/index.php/vod/show/id/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}{{fl.area}}{{fl.class}}{{fl.by}}{{fl.lang}}/page/fypage{{fl.year}}',
    filter: {
        "1":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"1"},{"n":"科幻","v":"6"},{"n":"奇幻","v":"7"},{"n":"冒險","v":"8"},{"n":"動作","v":"9"},{"n":"喜劇","v":"10"},{"n":"恐怖","v":"11"},{"n":"戰爭","v":"12"},{"n":"懸疑","v":"20"},{"n":"動畫電影","v":"21"},{"n":"災難片","v":"22"},{"n":"愛情","v":"23"},{"n":"犯罪","v":"24"},{"n":"經典","v":"25"},{"n":"劇情","v":"26"},{"n":"同性","v":"27"},{"n":"網路電影","v":"28"},{"n":"驚悚","v":"29"},{"n":"歌舞","v":"30"}]},
        	{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"動作","v":"/class/动作"},{"n":"喜劇","v":"/class/喜剧"},{"n":"愛情","v":"/class/爱情"},{"n":"科幻","v":"/class/科幻"},{"n":"恐怖","v":"/class/恐怖"},{"n":"懸疑","v":"/class/悬疑"},{"n":"驚悚","v":"/class/惊悚"},{"n":"犯罪","v":"/class/犯罪"},{"n":"劇情","v":"/class/剧情"},{"n":"槍戰","v":"/class/枪战"},{"n":"警匪","v":"/class/警匪"},{"n":"戰爭","v":"/class/战争"},{"n":"動畫","v":"/class/动画"},{"n":"奇幻","v":"/class/奇幻"},{"n":"武俠","v":"/class/武侠"},{"n":"古裝","v":"/class/古装"},{"n":"冒險","v":"/class/冒险"},{"n":"歷史","v":"/class/历史"},{"n":"經典","v":"/class/经典"},{"n":"親春","v":"/class/青春"},{"n":"文藝","v":"/class/文艺"},{"n":"運動","v":"/class/运动"},{"n":"微電影","v":"/class/微电影"},{"n":"農村","v":"/class/农村"},{"n":"兒童","v":"/class/儿童"},{"n":"網路電影","v":"/class/网络电影"}]},
        	{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"韓國","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英國","v":"/area/英国"},{"n":"法國","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄罗斯"},{"n":"義大利","v":"/area/意大利"},{"n":"其他","v":"/area/其他"}]},
        	{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
        	{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},
        	{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},
	        {"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最熱","v":"hits"},{"n":"評分","v":"score"}]}],
        "2":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"2"},{"n":"歐美劇","v":"13"},{"n":"國產劇","v":"14"},{"n":"韓劇","v":"15"},{"n":"日劇","v":"16"},{"n":"港劇","v":"32"},{"n":"台劇","v":"33"},{"n":"泰劇","v":"34"},{"n":"其他","v":"35"}]},
        	{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"動作","v":"/class/动作"},{"n":"喜劇","v":"/class/喜剧"},{"n":"愛情","v":"/class/爱情"},{"n":"科幻","v":"/class/科幻"},{"n":"恐怖","v":"/class/恐怖"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"犯罪","v":"/class/犯罪"},{"n":"剧情","v":"/class/剧情"},{"n":"商戰","v":"/class/商战"},{"n":"青春偶像","v":"/class/青春偶像"},{"n":"奇幻","v":"/class/奇幻"},{"n":"網劇","v":"/class/网剧"},{"n":"古裝","v":"/class/古装"},{"n":"情景","v":"/class/情景"},{"n":"歷史","v":"/class/历史"},{"n":"經典","v":"/class/经典"},{"n":"鄉村","v":"/class/乡村"},{"n":"家庭","v":"/class/家庭"}]},
        	{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"內地","v":"/area/内地"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"韓國","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英國","v":"/area/英国"},{"n":"法國","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄罗斯"},{"n":"義大利","v":"/area/意大利"},{"n":"其他","v":"/area/其他"}]},
        	{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
        	{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},
        	{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},
	        {"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最熱","v":"hits"},{"n":"評分","v":"score"}]}],
        "3":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"3"},{"n":"韓國綜藝","v":"37"},{"n":"日本綜藝","v":"38"},{"n":"國產綜藝","v":"39"},{"n":"歐美綜藝","v":"40"},{"n":"港台綜藝","v":"41"},{"n":"其他綜藝","v":"42"}]},
        	{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"選秀","v":"/class/选秀"},{"n":"情感","v":"/class/情感"},{"n":"訪談","v":"/class/访谈"},{"n":"播報","v":"/class/播报"},{"n":"旅遊","v":"/class/旅游"},{"n":"音樂","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"紀實","v":"/class/纪实"},{"n":"曲藝","v":"/class/曲艺"},{"n":"生活","v":"/class/生活"},{"n":"遊戲互動","v":"/class/游戏互动"},{"n":"財經","v":"/class/财经"},{"n":"求職","v":"/class/求职"}]},
        	{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"內地","v":"/area/内地"},{"n":"港台","v":"/area/港台"},{"n":"日韓","v":"/area/日韩"},{"n":"歐美","v":"/area/欧美"}]},
        	{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
        	{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},
        	{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},
	        {"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最熱","v":"hits"},{"n":"評分","v":"score"}]}],
        "4":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"4"},{"n":"國產動漫","v":"43"},{"n":"日本動漫","v":"44"},{"n":"歐美動漫","v":"45"},{"n":"韓國動漫","v":"46"},{"n":"港台動漫","v":"48"},{"n":"其他動漫","v":"47"}]},
        	{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"情感","v":"/class/情感"},{"n":"科幻","v":"/class/科幻"},{"n":"熱血","v":"/class/热血"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒險","v":"/class/冒险"},{"n":"蘿莉","v":"/class/萝莉"},{"n":"校園","v":"/class/校园"},{"n":"動作","v":"/class/动作"},{"n":"機戰","v":"/class/机战"},{"n":"運動","v":"/class/运动"},{"n":"戰爭","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"},{"n":"社會","v":"/class/社会"},{"n":"原創","v":"/class/原创"},{"n":"親子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"勵志","v":"/class/励志"},{"n":"其他","v":"/class/其他"}]},
        	{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"國產","v":"/area/国产"},{"n":"日本","v":"/area/日本"},{"n":"歐美","v":"/area/欧美"},{"n":"其他","v":"/area/其他"}]},
        	{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
        	{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},
        	{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0-9","v":"0-9"}]},
	        {"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最熱","v":"hits"},{"n":"評分","v":"score"}]}]
    },
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'}
    },
    class_name:'電影&電視劇&綜藝&動漫', // 分类筛选 /api.php/app/nav
    class_url:'1&2&3&4',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    headers:{
        'User-Agent':'UC_UA',
    },
    //class_parse:'.top_nav&&li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    play_parse:true,
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
     limit:6,
    推荐:'ul.vodlist.vodlist_wi;li;*;*;*;*',
    double:true, // 推荐内容是否双层定位
    一级:'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    二级:{
        "title":".lazyload&&title;li.data:eq(0)--span:eq(0)&&Text",
        "img":".lazyload&&data-original",
        "desc":"li.data:eq(1)&&Text;;;li.data:eq(2)--span&&Text;li.data:eq(3)--span&&Text",
        "content":".content_desc&&Text",
        "tabs":"#NumTab a",
        "lists":".play_list_box:eq(#id) .playlist_full li"
    },
    搜索:'body .searchlist_item;*;.vodlist_thumb&&data-original;*;*',
}
