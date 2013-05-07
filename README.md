# iOCSS
> iOS style for your mobile web app

### Look native
Give your app a look and feel that closely resembles the popular mobile platform, Apple's iOS.

### Scale beautifully
Built using elastic measurement units, iOCSS scales simply by increasing the `font-size` of the `<html>` element. 

### Look ma, no images!
iOCSS is built without images, so no matter how high-resolution the next tablet or phone is, your web app will look crisp and clean.

Combine with the awesomeness of <a href="http://fortawesome.github.com/Font-Awesome/">FontAwesome</a>, and you'll have infinite scalability.

### Animate with style
iOCSS doesn't provide JavaScript, but it does provide CSS3 animations where necessary.

### Simply Stylus
Written with Stylus to be easily customizable, but compiled to minified CSS to be easily deployable.


## Use iOCSS in your project

1. Download <a href="http://lazd.github.io/iOCSS/css/io.css" download="io.css">io.css</a>  and copy it to your project's `css/` folder

2. Include the following tags in the `<head>` of your layout:
```html
<link rel="stylesheet" type="text/css" href="css/io.css">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="apple-mobile-web-app-capable" content="yes">
```

3. Make sure your layout includes `<body class="iOCSS">` (or add `class="iOCSS` the element you want to contain your app)

4. Use some iOCSS classes:
```html
    <div class="frame">
        <div class="header">
            <div>
                <a href="#" class="button">Button</a>
            </div>
            
            <h1>Say Hello to iOCSS</h1>
            
            <div>
                <a href="#" class="button next">Let's go</a>
            </div>
        </div>
        
        <div class="scrollable">
            
            <div id="panel-about">
                
                <div class="well">
                    <h1>Welcome to iOCSS</h1>
                    <p>Have fun!</p>
                </div>
            
            </div>
        </div>
    </div>
```


## Building iOCSS

1. Clone the repository
```
git clone https://github.com/lazd/iOCSS.git
```

2. Install dependencies
```
cd iOCSS/
npm install
```

3. Build iOCSS with grunt
```
grunt
```

4. io.css will be built at `build/css/io.css`


## Contributing

Pull requests are welcome!

* Please take care to test your changes in Chrome, Safari, iOS, and Android browsers.
* "Namespace" any CSS classes you add such that they only affect elements that are descendants of an element with the `iOCSS` class
* Make sure your contribution doesn't break anything ;)


## License

iOCSS is licensed under the permissive BSD license.