console.log("Script Loaded!");
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

		if (node.nodeType === 3) {
			var text = node.nodeValue;
			var replacedText = 
				text.replace(/\bmillenials\b/gi,'lizard people')
					.replace(/\barms\b/gi,'nuts')
					.replace(/\gun\b/gi,'pew pew')
					.replace(/\bcyber discovery\b/gi,'cult of lyne')
					.replace(/\bwindows\b/gi,'JessOS')
					.replace(/\brights\b/gi,'rights to coochie')
					.replace(/\bright\b/gi,'right to coochie')
					.replace(/\bmicrosoft\b/gi,'michaelsoft')
					.replace(/\bpresident\b/gi,'🅱resident')
					.replace(/\btrump\b/gi,'🅱rumph');
			if (replacedText !== text) {	
				element.replaceChild(document.createTextNode(replacedText), node);
				console.log("Replaced Text.");
			}
		}
    }
}

pictures = ["https://img.buzzfeed.com/buzzfeed-static/static/2016-11/14/5/asset/buzzfeed-prod-fastlane03/sub-buzz-25177-1479118984-1.jpg",
			"https://pm1.narvii.com/6739/5537bb43de85947183d07509279d989c7666e483v2_00.jpg",
			"https://pbs.twimg.com/profile_images/851222255216578561/H1jyfuS9_400x400.jpg",
			"https://i.imgur.com/XuKbhSR.jpg",
			"https://i.redd.it/nh0fa1xgdl011.jpg",
			"https://i.imgur.com/RIHBpcV.jpg",
			"https://i.ytimg.com/vi/Z9q8O4N6h6U/maxresdefault.jpg",
			"https://i.redd.it/qrkhdamy0e711.jpg",
			"https://i.imgur.com/0NNwzMM.jpg",
			"https://pm1.narvii.com/6691/7c712302f6dbec6300738aeca9d03696a604822a_00.jpg",
			"https://images3.memedroid.com/images/UPLOADED464/5b0225793b37e.jpeg",
			"https://i.imgur.com/V45WWW5.png",
			"https://pm1.narvii.com/6816/624ab8a89d28ac81c42fbd5fb9941a1b55c52b06v2_hq.jpg",
			"https://i.imgur.com/MMUQSUs.png",
			"https://pics.me.me/my-dad-setting-my-wii-up-44-428-views-93-24484676.png",
			"https://i.imgur.com/MNHiUjf.jpg",
			"https://i.pinimg.com/originals/32/81/72/32817281ca1baf8f3d138df2ede6cc2e.jpg",
			"https://i.kym-cdn.com/entries/icons/medium/000/023/805/783.png",
			"https://media0ch-a.akamaihd.net/92/29/00e75461843db299df604080b904ad85.jpg",
			"https://image.blingee.com/images15/content/output/000/000/000/4ab/326085372_995332.gif"]
console.log("Loading images");
var picture = "",
	images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
	rand = parseInt(Math.random() * pictures.length)
	picture = pictures[rand]
    images[i].setAttribute("src", picture);
	images[i].setAttribute("srcset", picture);
	console.log("Replaced Image.");
};

var picture = "",
	banners = document.getElementsByTagName("banner");

for (var i = 0; i < banners.length; i++) {
	rand = parseInt(Math.random() * pictures.length)
	picture = pictures[rand]
    banners[i].setAttribute("style", "background-image: url("+picture+");");
	console.log("Replaced Banner.");
};