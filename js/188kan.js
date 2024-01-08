var rule={
    title:'188影视',
    //host:'https://www.188kan.com',
    host:'https://www.7k789.com',
    // url:'/vod-show{{fl.area}}{{fl.by}}-id-{{fl.cateId}}-page-fypage{{fl.year}}.html',
	url:'/vod-showfyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.area}}{{fl.by}}-id-{{fl.cateId}}-page-fypage{{fl.year}}',
	filter: {"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"6"},{"n":"喜剧片","v":"7"},{"n":"爱情片","v":"8"},{"n":"恐怖片","v":"10"},{"n":"犯罪片","v":"21"},{"n":"科幻片","v":"9"},{"n":"惊悚片","v":"32"},{"n":"战争片","v":"12"},{"n":"悬疑片","v":"27"},{"n":"灾难片","v":"33"},{"n":"谍战片","v":"34"},{"n":"冒险片","v":"28"},{"n":"剧情片","v":"11"},{"n":"武侠片","v":"45"},{"n":"奇幻片","v":"17"},{"n":"动画片","v":"22"},{"n":"历史片","v":"40"},{"n":"传记片","v":"39"},{"n":"歌舞片","v":"38"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"-area-大陆"},{"n":"香港","v":"-area-香港"},{"n":"台湾","v":"-area-台湾"},{"n":"美国","v":"-area-美国"},{"n":"法国","v":"-area-法国"},{"n":"英国","v":"-area-英国"},{"n":"日本","v":"-area-日本"},{"n":"韩国","v":"-area-韩国"},{"n":"德国","v":"-area-德国"},{"n":"泰国","v":"-area-泰国"},{"n":"印度","v":"-area-印度"},{"n":"意大利","v":"-area-意大利"},{"n":"西班牙","v":"-area-西班牙"},{"n":"加拿大","v":"-area-加拿大"},{"n":"其他","v":"-area-其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"-year-2024"},{"n":"2023","v":"-year-2023"},{"n":"2022","v":"-year-2022"},{"n":"2021","v":"-year-2021"},{"n":"2020","v":"-year-2020"},{"n":"2019","v":"-year-2019"},{"n":"2018","v":"-year-2018"},{"n":"2017","v":"-year-2017"},{"n":"2016","v":"-year-2016"},{"n":"2015","v":"-year-2015"},{"n":"2014","v":"-year-2014"},{"n":"2013","v":"-year-2013"},{"n":"2012","v":"-year-2012"},{"n":"2011","v":"-year-2011"},{"n":"2010","v":"-year-2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"-by-time"},{"n":"人气","v":"-by-hits"},{"n":"评分","v":"-by-score"}]}],"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"港台剧","v":"14"},{"n":"日韩剧","v":"15"},{"n":"欧美剧","v":"16"},{"n":"海外剧","v":"35"},{"n":"泰国剧","v":"41"},{"n":"其他剧","v":"36"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"-area-内地"},{"n":"韩国","v":"-area-韩国"},{"n":"香港","v":"-area-香港"},{"n":"台湾","v":"-area-台湾"},{"n":"日本","v":"-area-日本"},{"n":"美国","v":"-area-美国"},{"n":"泰国","v":"-area-泰国"},{"n":"英国","v":"-area-英国"},{"n":"新加坡","v":"-area-新加坡"},{"n":"其他","v":"-area-其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"-year-2024"},{"n":"2023","v":"-year-2023"},{"n":"2022","v":"-year-2022"},{"n":"2021","v":"-year-2021"},{"n":"2020","v":"-year-2020"},{"n":"2019","v":"-year-2019"},{"n":"2018","v":"-year-2018"},{"n":"2017","v":"-year-2017"},{"n":"2016","v":"-year-2016"},{"n":"2015","v":"-year-2015"},{"n":"2014","v":"-year-2014"},{"n":"2013","v":"-year-2013"},{"n":"2012","v":"-year-2012"},{"n":"2011","v":"-year-2011"},{"n":"2010","v":"-year-2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"-by-time"},{"n":"人气","v":"-by-hits"},{"n":"评分","v":"-by-score"}]}],"3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"大陆综艺","v":"23"},{"n":"港台综艺","v":"24"},{"n":"日韩综艺","v":"25"},{"n":"其他综艺","v":"26"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"-area-内地"},{"n":"港台","v":"-area-港台"},{"n":"日韩","v":"-area-日韩"},{"n":"欧美","v":"-area-欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"-year-2024"},{"n":"2023","v":"-year-2023"},{"n":"2022","v":"-year-2022"},{"n":"2021","v":"-year-2021"},{"n":"2020","v":"-year-2020"},{"n":"2019","v":"-year-2019"},{"n":"2018","v":"-year-2018"},{"n":"2017","v":"-year-2017"},{"n":"2016","v":"-year-2016"},{"n":"2015","v":"-year-2015"},{"n":"2014","v":"-year-2014"},{"n":"2013","v":"-year-2013"},{"n":"2012","v":"-year-2012"},{"n":"2011","v":"-year-2011"},{"n":"2010","v":"-year-2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"-by-time"},{"n":"人气","v":"-by-hits"},{"n":"评分","v":"-by-score"}]}],"4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"4"},{"n":"国产动漫","v":"42"},{"n":"日韩动漫","v":"43"},{"n":"欧美动漫","v":"44"},{"n":"港台动漫","v":"48"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"国产","v":"-area-国产"},{"n":"日本","v":"-area-日本"},{"n":"欧美","v":"-area-欧美"},{"n":"其他","v":"-area-其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"-year-2024"},{"n":"2023","v":"-year-2023"},{"n":"2022","v":"-year-2022"},{"n":"2021","v":"-year-2021"},{"n":"2020","v":"-year-2020"},{"n":"2019","v":"-year-2019"},{"n":"2018","v":"-year-2018"},{"n":"2017","v":"-year-2017"},{"n":"2016","v":"-year-2016"},{"n":"2015","v":"-year-2015"},{"n":"2014","v":"-year-2014"},{"n":"2013","v":"-year-2013"},{"n":"2012","v":"-year-2012"},{"n":"2011","v":"-year-2011"},{"n":"2010","v":"-year-2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"-by-time"},{"n":"人气","v":"-by-hits"},{"n":"评分","v":"-by-score"}]}],"5":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"-year-2024"},{"n":"2023","v":"-year-2023"},{"n":"2022","v":"-year-2022"},{"n":"2021","v":"-year-2021"},{"n":"2020","v":"-year-2020"},{"n":"2019","v":"-year-2019"},{"n":"2018","v":"-year-2018"},{"n":"2017","v":"-year-2017"},{"n":"2016","v":"-year-2016"},{"n":"2015","v":"-year-2015"},{"n":"2014","v":"-year-2014"},{"n":"2013","v":"-year-2013"},{"n":"2012","v":"-year-2012"},{"n":"2011","v":"-year-2011"},{"n":"2010","v":"-year-2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"-by-time"},{"n":"人气","v":"-by-hits"},{"n":"评分","v":"-by-score"}]}]},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		5:{cateId:'5'}
	},
    searchUrl:'/vod-search-page-fypage-wd-**.html',
    //class_parse:'.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?).html',

    searchable:2,
    headers:{'User-Agent':'MOBILE_UA', },
    class_name:'电影&电视剧&综艺&动漫&纪录片',
    class_url:'1&2&3&4&5',
    推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    // 二级:{"title":"h1&&Text;.module-info-tag&&Text","img":".lazyload&&data-original","desc":".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text;.module-info-item:eq(2)&&.module-info-item-content&&Text;.module-info-item:eq(1)&&.module-info-item-content&&Text","content":".module-info-introduction&&Text","tabs":".module-tab-item.tab-item","lists":".module-list:eq(#id)&&.module-play-list-content&&a"},
    二级:{
    	"title":"h1&&Text;.module-info-tag-link:eq(2)&&Text",
    	"img":".lazyload&&data-original",
    	"desc":".module-info-item:eq(4)&&Text;.module-info-tag-link:eq(0)&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text",
    	"content":".module-info-introduction&&Text",
    	"tabs":"#y-playList .tab-item",
    	"lists":".module-play-list:eq(#id) a"
    	     },
    搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}