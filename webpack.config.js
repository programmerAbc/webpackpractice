module.exports={
	devServer:{
		contentBase:"./public",
		historyApiFallback:true,
		inline:true
	},
	devtool:"source-map",
	entry: __dirname+"/app/main.js",
	output:{
		path:__dirname+"/public",
		filename:"bundle.js"
	
	}

}
