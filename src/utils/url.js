let baseUrl1 = "http://test1.mojsoft.com"; //地址1
let baseUrl2 = "192.168.1.6:8080"; //地址2

if (process.env.NODE_ENV === "production") {
<<<<<<< HEAD
	baseUrl1 = baseUrl2
=======
	baseUrl1 = "http://test1.mojsoft.com"
>>>>>>> 9-25 update
}

export default {
	baseUrl1,
	baseUrl2
}