const path = require("path");
const TeaserWebpackPlugin = require("terser-webpack-plugin");


module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),    // 번들 파일 경로 설정 (path를 이용해 절대 경로 참조 <=> __dirname)
        clean: true,                                // 번들 파일 생성 시에 기존 번들 파일 지운뒤 다시 생성 해라 
    },
    devtool: "source-map",                          // 원본 파일과(html) 번들 파일(js) 의 연결을 설정
    mode: "development",                            // 난독화 기능등에 대한 제공 여부 
    optimization: {
        minimizer: [
            new TeaserWebpackPlugin()               // 코드 압축용으로 외부 플러그인 사용 <=> teaser-webpack-plugin
        ]
    }
    
};
