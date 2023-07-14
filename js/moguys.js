/*
永久地址发布 https://www.gvideo.me/label/web.html
域名1：https://www.moguys.xyz
域名2：https://www.gvideo.me
域名3：https://www.movie4k.pro
*/
muban.mxone5.二级.title = 'h1&&Text;.video-info-aux&&Text';
muban.mxone5.二级.desc = '.video-info-items:eq(4)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
var rule = {
    title:'蘑菇',
    模板:'mxone5',
    host:'https://www.gvideo.me/label/web.html',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"p:eq(0)&&a:eq(1)&&href");print(src);HOST=src',
    url:'/vodshow/fyfilter.html',
    homeUrl:'/vodshow/13--score---------.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter: {
        "13":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"喜劇","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"戰爭","v":"战争"},{"n":"武俠","v":"武侠"},{"n":"劇情","v":"剧情"},{"n":"動畫","v":"动画"},{"n":"驚悚","v":"惊悚"},{"n":"災難","v":"灾难"},{"n":"懸疑","v":"悬疑"},{"n":"冒險","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"紀錄","v":"纪录"},{"n":"古裝","v":"古装"},{"n":"奇幻","v":"奇幻"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"時間","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
        "14":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"喜劇","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"戰爭","v":"战争"},{"n":"武俠","v":"武侠"},{"n":"劇情","v":"剧情"},{"n":"動畫","v":"动画"},{"n":"驚悚","v":"惊悚"},{"n":"災難","v":"灾难"},{"n":"懸疑","v":"悬疑"},{"n":"冒險","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"紀錄","v":"纪录"},{"n":"古裝","v":"古装"},{"n":"奇幻","v":"奇幻"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"時間","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
        "1":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"6"},{"n":"喜劇片","v":"7"},{"n":"愛情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"劇情片","v":"10"},{"n":"恐怖片","v":"11"},{"n":"戰爭片","v":"12"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"喜劇","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"戰爭","v":"战争"},{"n":"武俠","v":"武侠"},{"n":"劇情","v":"剧情"},{"n":"動畫","v":"动画"},{"n":"驚悚","v":"惊悚"},{"n":"災難","v":"灾难"},{"n":"懸疑","v":"悬疑"},{"n":"冒險","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"紀錄","v":"纪录"},{"n":"古裝","v":"古装"},{"n":"奇幻","v":"奇幻"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"時間","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
        "15":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"喜劇","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"戰爭","v":"战争"},{"n":"武俠","v":"武侠"},{"n":"劇情","v":"剧情"},{"n":"動畫","v":"动画"},{"n":"驚悚","v":"惊悚"},{"n":"災難","v":"灾难"},{"n":"懸疑","v":"悬疑"},{"n":"冒險","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"紀錄","v":"纪录"},{"n":"古裝","v":"古装"},{"n":"奇幻","v":"奇幻"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"泰國","v":"泰国"},{"n":"英國","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"時間","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
        "24":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"喜劇","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"戰爭","v":"战争"},{"n":"武俠","v":"武侠"},{"n":"劇情","v":"剧情"},{"n":"動畫","v":"动画"},{"n":"驚悚","v":"惊悚"},{"n":"災難","v":"灾难"},{"n":"懸疑","v":"悬疑"},{"n":"冒險","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"紀錄","v":"纪录"},{"n":"古裝","v":"古装"},{"n":"奇幻","v":"奇幻"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"泰國","v":"泰国"},{"n":"英國","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"泰語","v":"泰语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"時間","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
        "20":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"喜劇","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"戰爭","v":"战争"},{"n":"武俠","v":"武侠"},{"n":"劇情","v":"剧情"},{"n":"動畫","v":"动画"},{"n":"驚悚","v":"惊悚"},{"n":"災難","v":"灾难"},{"n":"懸疑","v":"悬疑"},{"n":"冒險","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"紀錄","v":"纪录"},{"n":"古裝","v":"古装"},{"n":"奇幻","v":"奇幻"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"泰國","v":"泰国"},{"n":"英國","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"時間","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
        "3":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"選秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"訪談","v":"访谈"},{"n":"播報","v":"播报"},{"n":"旅遊","v":"旅游"},{"n":"音樂","v":"音乐"},{"n":"美食","v":"美食"},{"n":"紀實","v":"纪实"},{"n":"曲藝","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"遊戲互動","v":"游戏互动"},{"n":"財經","v":"财经"},{"n":"求職","v":"求职"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"},{"n":"日韓","v":"日韩"},{"n":"歐美","v":"欧美"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"時間","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}],
        "4":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"情感","v":"情感"},{"n":"科幻","v":"科幻"},{"n":"熱血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒險","v":"冒险"},{"n":"蘿莉","v":"萝莉"},{"n":"校園","v":"校园"},{"n":"動作","v":"动作"},{"n":"機戰","v":"机战"},{"n":"運動","v":"运动"},{"n":"戰爭","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社會","v":"社会"},{"n":"原創","v":"原创"},{"n":"親子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"勵志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"國產","v":"国产"},{"n":"日本","v":"日本"},{"n":"歐美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粵語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"時間","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"time"},{"n":"人氣","v":"hits"},{"n":"評分","v":"score"}]}]
    },
    filter_def:{
        13:{cateId:'13'},
        14:{cateId:'14'},
        1:{cateId:'1'},
        15:{cateId:'15'},
        24:{cateId:'24'},
        20:{cateId:'20'},
        3:{cateId:'3'},
        4:{cateId:'4'}
    },
    class_parse: '.library-list&&a;a&&Text;a&&href;/(\\d+)',
    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == "1") {
            url = unescape(url)
        } else if (html.encrypt == "2") {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            input
        }
    `,
    // searchUrl:'/vodsearch/**----------fypage---.html',
    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
	detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}