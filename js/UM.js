var rule = {
	title: 'UM电影[V2]', // csp_AppYsV2
	host: 'https://www.umkan.cc',
	// host: 'https://www.umkan.app',
	// hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(1)&&a&&href");print(src);HOST=src',
	homeUrl:'/mogai_api.php/v1.vod/vodPhbAll',
	// url: '/mogai_api.php/v1.vod?type=fyclass&limit=20&page=fypage',
	url: '/mogai_api.php/v1.vod?type=fyclassfyfilter&limit=20&page=fypage',
	filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}&by={{fl.by}}',
	filter: {
		"1":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"喜劇","v":"喜剧"},{"n":"動作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"驚悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"冒險","v":"冒险"},{"n":"科幻","v":"科幻"},{"n":"懸疑","v":"悬疑"},{"n":"劇情","v":"剧情"},{"n":"動畫","v":"动画"},{"n":"武俠","v":"武侠"},{"n":"戰爭","v":"战争"},{"n":"歌舞","v":"歌舞"},{"n":"奇幻","v":"奇幻"},{"n":"傳記","v":"传记"},{"n":"警匪","v":"警匪"},{"n":"歷史","v":"历史"},{"n":"運動","v":"运动"},{"n":"災難","v":"灾难"},{"n":"西部","v":"西部"},{"n":"魔幻","v":"魔幻"},{"n":"槍戰","v":"枪战"},{"n":"恐怖","v":"恐怖"},{"n":"記錄","v":"记录"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"美國","v":"美国"},{"n":"香港","v":"香港"},{"n":"韓國","v":"韩国"},{"n":"英國","v":"英国"},{"n":"臺灣","v":"台湾"},{"n":"日本","v":"日本"},{"n":"法國","v":"法国"},{"n":"意大利","v":"意大利"},{"n":"德國","v":"德国"},{"n":"西班牙","v":"西班牙"},{"n":"泰國","v":"泰国"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法語","v":"法语"},{"n":"德語","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]}],
		"2":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"古裝","v":"古装"},{"n":"喜劇","v":"喜剧"},{"n":"偶像","v":"偶像"},{"n":"家庭","v":"家庭"},{"n":"警匪","v":"警匪"},{"n":"言情","v":"言情"},{"n":"軍事","v":"军事"},{"n":"武俠","v":"武侠"},{"n":"懸疑","v":"悬疑"},{"n":"歷史","v":"历史"},{"n":"農村","v":"农村"},{"n":"都市","v":"都市"},{"n":"神話","v":"神话"},{"n":"科幻","v":"科幻"},{"n":"少兒","v":"少儿"},{"n":"搞笑","v":"搞笑"},{"n":"諜戰","v":"谍战"},{"n":"戰爭","v":"战争"},{"n":"年代","v":"年代"},{"n":"犯罪","v":"犯罪"},{"n":"恐怖","v":"恐怖"},{"n":"驚悚","v":"惊悚"},{"n":"愛情","v":"爱情"},{"n":"劇情","v":"剧情"},{"n":"奇幻","v":"奇幻"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"泰國","v":"泰国"},{"n":"英國","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"},{"n":"香港地區","v":"香港地区"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]}],
		"3":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"真人秀","v":"真人秀"},{"n":"訪談","v":"访谈"},{"n":"情感","v":"情感"},{"n":"選秀","v":"选秀"},{"n":"旅遊","v":"旅游"},{"n":"美食","v":"美食"},{"n":"脫口秀","v":"口秀"},{"n":"曲藝","v":"曲艺"},{"n":"搞笑","v":"搞笑"},{"n":"遊戲","v":"游戏"},{"n":"歌舞","v":"歌舞"},{"n":"生活","v":"生活"},{"n":"音樂","v":"音乐"},{"n":"時尚","v":"时尚"},{"n":"益智","v":"益智"},{"n":"職場","v":"职场"},{"n":"少兒","v":"少儿"},{"n":"紀實","v":"纪实"},{"n":"盛會","v":"盛会"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]}],
		"4":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"熱血","v":"热血"},{"n":"科幻","v":"科幻"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒險","v":"冒险"},{"n":"校園","v":"校园"},{"n":"動作","v":"动作"},{"n":"機戰","v":"机战"},{"n":"運動","v":"运动"},{"n":"戰爭","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社會","v":"社会"},{"n":"原創","v":"原创"},{"n":"親子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"勵志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"日本","v":"日本"},{"n":"歐美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]}],
		"20":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]}],
		"21":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]}]
	},
	detailUrl:'/mogai_api.php/v1.vod/detail?vod_id=fyid',
	searchUrl: '/mogai_api.php/v1.vod?wd=**&page=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'okhttp/4.1.0'},
	timeout:5000,
	class_name:'電影&電視劇&綜藝&動漫&短片&記錄片', // 分类筛选 /mogai_api.php/v1.vod/types
	class_url:'1&2&3&4&20&21',
	play_parse:true,
	lazy:'',
	limit:6,
	推荐:'json:data.list;vod_list;vod_name;vod_pic;vod_remarks;vod_id',
	double:true,//是否双层列表定位,默认false
	一级:'json:data.list;vod_name;vod_pic;vod_remarks;vod_id',
	二级:`js:
		try {
			let html = request(input);
			print(html);
			html = JSON.parse(html);
			let node = html.data;
			VOD = {
				vod_id: node["vod_id"],
				vod_name: node["vod_name"],
				vod_pic: node["vod_pic"],
				type_name: node["vod_class"],
				vod_year: node["vod_year"],
				vod_area: node["vod_area"],
				vod_remarks: node["vod_remarks"],
				vod_actor: node["vod_actor"],
				vod_director: node["vod_director"],
				vod_content: node["vod_content"].strip()
			};
			let episodes = node.vod_play_list;
			let playMap = {};
			if (typeof play_url === "undefined") {
				var play_url = ""
			}
			episodes.forEach(function(ep) {
				let source = ep["player_info"]["show"];
				if (!playMap.hasOwnProperty(source)) {
					playMap[source] = []
				}
				playMap[source].append(ep["url"])
			});
			let playFrom = [];
			let playList = [];
			Object.keys(playMap).forEach(function(key) {
				playFrom.append(key);
				playList.append(playMap[key])
			});
			let vod_play_from = playFrom.reverse().join("$$$");
			let vod_play_url = playList.reverse().join("$$$");
			VOD["vod_play_from"] = vod_play_from;
			VOD["vod_play_url"] = vod_play_url
		} catch (e) {
			log("获取二级详情页发生错误:" + e.message)
		}
	`,
	搜索:'*',
}