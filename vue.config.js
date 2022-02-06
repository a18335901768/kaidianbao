module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/mixins.scss";` //引入全局变量   
            },
        }
    },

}