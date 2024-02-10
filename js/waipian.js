muban.mxpro.二级.title = 'h1&&Text;.module-info-tag-link:eq(2)&&Text';
muban.mxpro.二级.img = '.lazyload&&data-src';
muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;.module-info-tag-link:eq(0)&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item--span:eq(3)&&Text;.module-info-item--span:eq(1)&&Text';
var rule = {
    title:'歪片星球',
    模板:'mxpro',
    host:'https://waipian20.com',
    url:'/show-fyclassfyfilter/',
    class_name:'電影&電視劇&綜藝&動漫&紀錄片', // 分类筛选 /api.php/app/nav
    class_url:'dianying&juji&zongyi&dongman&jilupian',
    filterable:1,//是否启用分类筛选,
    filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}',
    filter: {
        "dianying":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"劇情","v":"剧情"},{"n":"喜劇","v":"喜剧"},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"動畫","v":"动画"},{"n":"懸疑","v":"悬疑"},{"n":"驚悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"犯罪","v":"犯罪"},{"n":"同性","v":"同性"},{"n":"戰爭","v":"战争"},{"n":"奇幻","v":"奇幻"},{"n":"冒險","v":"冒险"},{"n":"災難","v":"灾难"},{"n":"武俠","v":"武侠"},{"n":"古裝","v":"古装"},{"n":"短片","v":"短片"},{"n":"Netflix","v":"Netflix"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"臺灣","v":"中国台湾"},{"n":"美國","v":"美国"},{"n":"韓國","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰國","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"馬來西亞","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英國","v":"英国"},{"n":"法國","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"澳大利亞","v":"澳大利亚"}]},{"key":"by","name":"排序","value":[{"n":"更新時間","v":"time"},{"n":"最多播放","v":"hits"},{"n":"實時熱門","v":"hits_day"},{"n":"近期熱播","v":"hits_week"},{"n":"新片上線","v":"year"}]}],
        "juji":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"劇情","v":"剧情"},{"n":"喜劇","v":"喜剧"},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"懸疑","v":"悬疑"},{"n":"驚悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"犯罪","v":"犯罪"},{"n":"同性","v":"同性"},{"n":"歷史","v":"历史"},{"n":"戰爭","v":"战争"},{"n":"奇幻","v":"奇幻"},{"n":"冒險","v":"冒险"},{"n":"災難","v":"灾难"},{"n":"武俠","v":"武侠"},{"n":"古裝","v":"古装"},{"n":"都市","v":"都市"},{"n":"情景","v":"情景"},{"n":"家庭","v":"家庭"},{"n":"短劇","v":"短剧"},{"n":"Netflix","v":"Netflix"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"臺灣","v":"中国台湾"},{"n":"韓國","v":"韩国"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"英國","v":"英国"},{"n":"澳大利亞","v":"澳大利亚"},{"n":"西班牙","v":"西班牙"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"新加坡","v":"新加坡"},{"n":"馬來西亞","v":"马来西亚"}]},{"key":"by","name":"排序","value":[{"n":"更新時間","v":"time"},{"n":"最多播放","v":"hits"},{"n":"實時熱門","v":"hits_day"},{"n":"近期熱播","v":"hits_week"},{"n":"新片上線","v":"year"}]}],
        "zongyi":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"音樂","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"運動","v":"运动"},{"n":"真人秀","v":"真人秀"},{"n":"旅游","v":"旅游"},{"n":"美食","v":"美食"},{"n":"Netflix","v":"Netflix"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"臺灣","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"韓國","v":"韩国"}]},{"key":"by","name":"排序","value":[{"n":"更新時間","v":"time"},{"n":"最多播放","v":"hits"},{"n":"實時熱門","v":"hits_day"},{"n":"近期熱播","v":"hits_week"},{"n":"新片上線","v":"year"}]}],
        "dongman":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"劇情","v":"剧情"},{"n":"喜劇","v":"喜剧"},{"n":"動作","v":"动作"},{"n":"愛情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"動畫","v":"动画"},{"n":"懸疑","v":"悬疑"},{"n":"驚悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"犯罪","v":"犯罪"},{"n":"同性","v":"同性"},{"n":"戰爭","v":"战争"},{"n":"冒險","v":"冒险"},{"n":"災難","v":"灾难"},{"n":"Netflix","v":"Netflix"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"臺灣","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"韓國","v":"韩国"}]},{"key":"by","name":"排序","value":[{"n":"更新時間","v":"time"},{"n":"最多播放","v":"hits"},{"n":"實時熱門","v":"hits_day"},{"n":"近期熱播","v":"hits_week"},{"n":"新片上線","v":"year"}]}],
        "jilupian":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"傳記","v":"传记"},{"n":"歷史","v":"历史"},{"n":"紀錄","v":"纪录"},{"n":"Netflix","v":"Netflix"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"中國大陸","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"臺灣","v":"中国台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"}]},{"key":"by","name":"排序","value":[{"n":"更新時間","v":"time"},{"n":"最多播放","v":"hits"},{"n":"實時熱門","v":"hits_day"},{"n":"近期熱播","v":"hits_week"},{"n":"新片上線","v":"year"}]}]
    },
	filter_def:{
		dianying:{cateId:'dianying'},
		juji:{cateId:'juji'},
		zongyi:{cateId:'zongyi'},
		dongman:{cateId:'dongman'},
		jilupian:{cateId:'jilupian'}
	},
    searchUrl:'/search-**----------fypage---/',
    //class_parse: '.navbar-items li:gt(1):lt(8);a&&Text;a&&href;.*t/(.*?)/',
    lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);log(html);var url=html.url;if(html.encrypt=='1'){url=unescape(url).split('&')[0]}else if(html.encrypt=='2'){url=unescape(base64Decode(url).split('&')[0])}if(/m3u8|mp4/.test(url)){input=url}else{input}",
    推荐:'*',
    一级: 'a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-src;.module-item-note&&Text;a&&href',
    搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-src;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}
