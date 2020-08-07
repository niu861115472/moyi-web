let baseUrl1 = "http://test1.mojsoft.com"; //地址1
let baseUrl2 = "192.168.1.6:8080"; //地址2

if (process.env.NODE_ENV === "production") {
	baseUrl1 = baseUrl2
}

export default {
	baseUrl1,
	baseUrl2
}