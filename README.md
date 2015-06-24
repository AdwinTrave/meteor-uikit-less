# UIkit

UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces.

* [Homepage](http://getuikit.com) - Learn more about UIkit
* [@getuikit](https://twitter.com/getuikit) - Get the latest buzz on Twitter
* [Google+ Community](https://plus.google.com/communities/114238665434626719878) - Share news and latest work

Join our developer chat. We are online every work day between 8:00 and 18:00 UTC

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/uikit/uikit)

## Getting started

```
meteor add storyteller:uikit-less
```

Add the following anywhere in your client side javascript:

```javascript
Meteor.startup(function() {
  $(document.body).attr('data-uk-observe', '1');
});
```

## Contributing

UIkit follows the [GitFlow branching model](http://nvie.com/posts/a-successful-git-branching-model). The ```master``` branch always reflects a production-ready state while the latest development is taking place in the ```develop``` branch.

Each time you want to work on a fix or a new feature, create a new branch based on the ```develop``` branch: ```git checkout -b BRANCH_NAME develop```. Only pull requests to the ```develop``` branch will be merged.

## Versioning

UIkit is maintained by using the [Semantic Versioning Specification (SemVer)](http://semver.org).

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 9+ ✔ | 7.1+ ✔ | Latest ✔ |

## Copyright and License

Copyright [YOOtheme](http://www.yootheme.com) GmbH under the [MIT license](LICENSE.md).
