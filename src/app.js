var app = new Vue({
	el: "#app",
	data: {
		topNavMenu: [
			{
				text: "Courses",
				href: "courses/",
				featured: false,
			},
			{
				text: "Course Formats",
				href: "course-formats/",
				featured: false,
			},
			{
				text: "Add Course",
				href: "add-course/",
				featured: true,
			},
			{
				text: "Pages",
				href: "pages/",
				featured: false,
			},
			{
				text: "Demos",
				href: "demos/",
				featured: false,
			},
		],
		topNavSocial: [
			{
				iconFamily: "fab",
				iconName: "fa-linkedin",
				href: "https://www.linkedin.com",
			},
			{
				iconFamily: "fab",
				iconName: "fa-instagram",
				href: "https://www.instragram.com",
			},
			{
				iconFamily: "fab",
				iconName: "fa-facebook",
				href: "https://www.facebook.com",
			},
			{
				iconFamily: "fab",
				iconName: "fa-twitter",
				href: "https://www.twitter.com",
			},
		],
		footerSocial: [
			{
				iconFamily: "fab",
				iconName: "fa-facebook",
				href: "https://www.facebook.com",
			},
			{
				iconFamily: "fab",
				iconName: "fa-twitter",
				href: "https://www.twitter.com",
			},
			{
				iconFamily: "fab",
				iconName: "fa-instagram",
				href: "https://www.instragram.com",
			},
		],
		footerSitemap: [
			{
				text: "Blog",
				href: "blog/",
			},
			{
				text: "Courses",
				href: "courses/",
			},
			{
				text: "Home",
				href: "home/",
			},
			{
				text: "Membership Area",
				href: "members/",
			},
			{
				text: "Shortcodes",
				href: "shortcodes/",
			},
			{
				text: "Typography",
				href: "typography/",
			},
		],
	},
});
