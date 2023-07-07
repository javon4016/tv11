var rule = {
    title:'饭团影视',
    //模板:'首图2',
    host:'https://www.fantuanhd.com',
    // url:'/show/id-fyclass/page/fypage.html',
    url:'/show/fyclassfyfilter.html',
    searchable: 1,//是否启用全局搜索,
    quickSearch: 1,//是否启用快速搜索,
    headers: {'User-Agent': 'UC_UA'},
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}/page/fypage{{fl.year}}',
    filter: {
        "1":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"动作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"剧情","v":"/class/剧情"},{"n":"战争","v":"/class/战争"},{"n":"犯罪","v":"/class/犯罪"},{"n":"灾难","v":"/class/灾难"},{"n":"奇幻","v":"/class/奇幻"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"冒险","v":"/class/冒险"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"},{"n":"1980","v":"/year/1980"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"普通话","v":"/lang/普通话"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"按時間","v":"/by/time"},{"n":"按人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
        "2":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"古装","v":"/class/古装"},{"n":"战争","v":"/class/战争"},{"n":"偶像","v":"/class/偶像"},{"n":"犯罪","v":"/class/犯罪"},{"n":"奇幻","v":"/class/奇幻"},{"n":"剧情","v":"/class/剧情"},{"n":"历史","v":"/class/历史"},{"n":"网剧","v":"/class/网剧"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"},{"n":"1980","v":"/year/1980"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"普通话","v":"/lang/普通话"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"按時間","v":"/by/time"},{"n":"按人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
        "3":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"相声","v":"/class/相声"},{"n":"真人秀","v":"/class/真人秀"},{"n":"脱口秀","v":"/class/脱口秀"},{"n":"选秀","v":"/class/选秀"},{"n":"情感","v":"/class/情感"},{"n":"访谈","v":"/class/访谈"},{"n":"播报","v":"/class/播报"},{"n":"旅游","v":"/class/旅游"},{"n":"音乐","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"纪实","v":"/class/纪实"},{"n":"舞蹈","v":"/class/舞蹈"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"欧美","v":"/area/欧美"},{"n":"韩国","v":"/area/韩国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"},{"n":"1980","v":"/year/1980"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"普通话","v":"/lang/普通话"},{"n":"粤语","v":"/lang/粤语"},{"n":"英语","v":"/lang/英语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"按時間","v":"/by/time"},{"n":"按人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
        "4":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"科幻","v":"/class/科幻"},{"n":"热血","v":"/class/热血"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒险","v":"/class/冒险"},{"n":"萝莉","v":"/class/萝莉"},{"n":"校园","v":"/class/校园"},{"n":"动作","v":"/class/动作"},{"n":"机战","v":"/class/机战"},{"n":"运动","v":"/class/运动"},{"n":"战争","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"欧美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"},{"n":"1980","v":"/year/1980"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"普通话","v":"/lang/普通话"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"按時間","v":"/by/time"},{"n":"按人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
        "5":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"历史","v":"/class/历史"},{"n":"传记","v":"/class/传记"},{"n":"生活","v":"/class/生活"},{"n":"人文","v":"/class/人文"},{"n":"地理","v":"/class/地理"},{"n":"舞台","v":"/class/舞台"},{"n":"专题","v":"/class/专题"},{"n":"时事","v":"/class/时事"},{"n":"宣传","v":"/class/宣传"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"},{"n":"1980","v":"/year/1980"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"普通话","v":"/lang/普通话"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"按時間","v":"/by/time"},{"n":"按人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]
    },
    
    class_name:'電影&電視劇&綜藝&動漫&紀錄片', 
    class_url:'1&2&3&4&5&',
    //class_parse: '.stui-header__menu li:gt(0):lt(6);a&&Text;a&&href;.*/id-(\\d+).html',
    searchUrl:'/search/page/fypage/wd/**.html',
    //searchUrl:'/search/-------------.html?wd=**&submit=',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    double: true, // 推荐内容是否双层定位
            一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                        "title": ".stui-content__detail .title&&Text;.stui-content__detail p:eq(-2)&&Text",
                        "img": ".stui-content__thumb .lazyload&&data-original",
                        "desc": ".data:eq(3)&&Text;;;.data:eq(1)&&Text;.data:eq(2)&&Text",
                        "content": ".detail&&Text",
                       "tabs": ".stui-vodlist__head h3",
                       "lists": ".stui-content__playlist:eq(#id) li"
                      },
   搜索: 'ul.stui-vodlist__media:eq(0) li,ul.stui-vodlist:eq(0) li,#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
   搜索1: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
   搜索2: 'ul.stui-vodlist__media&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
}