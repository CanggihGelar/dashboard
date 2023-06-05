import{
	UilEstate,
	UilClipboardAlt,
	UilUsersAlt,
	UilPackage,
	UilChart,
	UilSignOutAlt,
	UilMoneyWithdrawal,
	UilUsdSquare,
} from "@iconscout/react-unicons"

import img1 from '../images/canggih1ed.jpg'
import img2 from '../images/canggih2ed.jpg'
import img3 from '../images/canggih3ed.jpg'

export const SidebarData = [
	{
		icon: UilEstate,
		heading: "Dashboard",
	},
	{
		icon: UilClipboardAlt,
		heading: "Orders",
	},
	{
		icon: UilUsersAlt,
		heading: "Customers",
	},
	{
		icon: UilPackage,
		heading: "Product",
	},
	{
		icon: UilChart,
		heading: "Analytics",
	},
];

export const CardsData = [
	{
		title: 'Sales',
		color: {
			backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 70,
		value: "25,970",
		png: UilUsdSquare,
		series: [
			{
				name: "Sales",
				data: [31, 40, 28, 51, 42, 109, 100],
			},			
		],
	},
	{
		title: 'Revenue',
		color: {
			backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
			boxShadow: "0px 10px 20px 0px #fdc0c7",
		},
		barValue: 80,
		value: "14,270",
		png: UilMoneyWithdrawal,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
			},			
		],
	},
	{
		title: 'Expenses',
		color: {
			backGround: "linear-gradient(rgb(248, 212, 154) -146%, rgb(255 202 113) -46%)",
			boxShadow: "0px 10px 20px 0px #f9d59b",
		},
		barValue: 60,
		value: "4,270",
		png: UilClipboardAlt,
		series: [
			{
				name: "Expenses",
				data: [10, 25, 15, 30, 12, 15, 20],
			},			
		],
	},
];

export const UpdatesData = [
	{
		img: img1,
		name: "Canggih",
		not: "has received Ice Cream sandwich",
		time: "25 seconds ago",
	},
	{
		img: img2,
		name: "Setyo",
		not: "has ordered CupCake",
		time: "15 minutes ago",
	},
	{
		img: img3,
		name: "Adhi",
		not: "has ordered Gingerbread",
		time: "3 hours ago",
	},
];

export const ProgressBarData = [
	{
		amount: 277,
		percentage: 95.52,
		stars: 5,
	},
	{
		amount: 12,
		percentage: 4.14,
		stars: 4,
	},
	{
		amount: 0,
		percentage: 0,
		stars: 3,
	},
	{
		amount: 0,
		percentage: 0,
		stars: 2,
	},
	{
		amount: 1,
		percentage: 0.34,
		stars: 1,
	},
]