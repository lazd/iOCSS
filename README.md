# iOCSS: Stylus CSS for mobile applications

Give your app a look and feel that closely resembles the popular mobile platform.

### You can't tell by the pixels
Built using elastic measurement units, iOCSS scales simply by increasing the `font-size` of the `<body>` element. 

### Look ma, no images!
iOCSS is built without images, so no matter how high-resolution the next tablet or phone is, your web app will look crisp and clean.

Combine with the awesomeness of <a href="http://fortawesome.github.com/Font-Awesome/">FontAwesome</a>, and you'll have infinite scalability.

### Animate with style
iOCSS doesn't provide JavaScript, but it does provide CSS3 animations where necessary.

### Simply Stylus
Written with Stylus to be easily customizable, but compiled to minified CSS to be easily deployable.

## Get started

1. Clone the repository

    `git clone https://github.com/lazd/iOCSS.git`

2. Install dependencies

    `cd iOCSS`
    
    `npm install`

3. Build iOCSS with grunt

    `grunt`

4. Copy io.css to your project's CSS folder

    `cp build/css/io.css ~/myProject/css/`
