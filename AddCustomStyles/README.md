## add-custom-styles

This sample demonstrate how to load third-party css into SharePoint Framework Webparts (SPFx)

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

### How to do it?

Referencing external CSS files from a URL is different than referencing resources from within your project. 

The SharePoint Framework provides you a way of importing external resources, but it only works for javascript libraries. (`config.json` file). However, if you need to reference external CSS, i.e Bootstrap, you should use the `SPModuleLoader` class instead.

The first thing to do is to import the SPComponentLoader by doing this:

```javascript
import { SPComponentLoader } from '@microsoft/sp-loader';
```

and then load the resources you'd need

```javascript
  constructor() {
    super();

    // load bootstrap css
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'); 
  }
```

When you open the page, you'll see that the bootstrap.min.css was successfully loaded.
[![boostrap loaded](http://res.cloudinary.com/rodrigoromano/image/upload/c_scale,q_auto,w_516/v1491063728/blog/Screenshot_from_2017-04-01_13_21_43.png)](http://res.cloudinary.com/rodrigoromano/image/upload/q_67/v1491063728/blog/Screenshot_from_2017-04-01_13_21_43.png)

and the bootstrap layout will be applied to your WebPart

![WebPart](http://res.cloudinary.com/rodrigoromano/image/upload/v1491064166/blog/Screenshot_from_2017-04-01_13_28_58.png)