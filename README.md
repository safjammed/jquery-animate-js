
# jquery.animate.js v. 0.2
Have you wondered how to do CSS3 animations with jquery? Well, Now you can do those fun and cool animations with jquery with ease. 
Save time,save space.This project is still on development phase, any critisism will be welcomed.

## demo
Check This out https://safjammed.github.io/jquery-animate-js/
Get the codes too! :)

## Requirement
  1. jQuery 1.8 and up
  2. Browser with HTML5 support
 

## Basic Usage
1. Include the stylesheet on your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="jquery.animate.min.css">
    <script src="jquery.js"></script>
    <script src="jquery.animate.js"></script>
  </head>
  ```
2. Write code like the following:

* Easy way: simply write the following code to start:
  ```javascript
    $('#myobj').doAnim('bounce');
   ```
   or
   ```javascript
   $('#myobj').animateCss('bounce');
   ```
   put any of the suppoerted animations into the doAnim() or animateCss and you'll start right away.
   
* Advanced : 
  The API is like the following:
   ```javascript
   $(obejct).doAnim(options);
   ```
   This plugin has following options/ Configuration:
    1. 'animation' (Animation name)
    2. 'times' (how many times the animation would run)
    3. 'duration'(the duration of each animation)
    4. 'delay' (delay of animation)
    
EXAMPLE:
 ```javascript
  $('#myobj').doAnim({
        'animation' : 'pulse',
        'times' : 2,
        'duration' : 0.5,
        'delay' :1
        });
   ```
   The upper code will wait 1 sec. animate #myobj with pulse effect 2 times and a duration 0.5 secs each time.

##supported animations

  * `bounce`
  * `flash`
  * `pulse`
  * `rubberBand`
  * `shake`
  * `headShake`
  * `swing`
  * `tada`
  * `wobble`
  * `jello`
  * `bounceIn`
  * `bounceInDown`
  * `bounceInLeft`
  * `bounceInRight`
  * `bounceInUp`
  * `bounceOut`
  * `bounceOutDown`
  * `bounceOutLeft`
  * `bounceOutRight`
  * `bounceOutUp`
  * `fadeIn`
  * `fadeInDown`
  * `fadeInDownBig`
  * `fadeInLeft`
  * `fadeInLeftBig`
  * `fadeInRight`
  * `fadeInRightBig`
  * `fadeInUp`
  * `fadeInUpBig`
  * `fadeOut`
  * `fadeOutDown`
  * `fadeOutDownBig`
  * `fadeOutLeft`
  * `fadeOutLeftBig`
  * `fadeOutRight`
  * `fadeOutRightBig`
  * `fadeOutUp`
  * `fadeOutUpBig`
  * `flipInX`
  * `flipInY`
  * `flipOutX`
  * `flipOutY`
  * `lightSpeedIn`
  * `lightSpeedOut`
  * `rotateIn`
  * `rotateInDownLeft`
  * `rotateInDownRight`
  * `rotateInUpLeft`
  * `rotateInUpRight`
  * `rotateOut`
  * `rotateOutDownLeft`
  * `rotateOutDownRight`
  * `rotateOutUpLeft`
  * `rotateOutUpRight`
  * `hinge`
  * `rollIn`
  * `rollOut`
  * `zoomIn`
  * `zoomInDown`
  * `zoomInLeft`
  * `zoomInRight`
  * `zoomInUp`
  * `zoomOut`
  * `zoomOutDown`
  * `zoomOutLeft`
  * `zoomOutRight`
  * `zoomOutUp`
  * `slideInDown`
  * `slideInLeft`
  * `slideInRight`
  * `slideInUp`
  * `slideOutDown`
  * `slideOutLeft`
  * `slideOutRight`
  * `slideOutUp`

## ChangeLog:

Version - 0.2
 * Added Callback Feafuture

Version - 0.01
  * Initial Release

## License
Animate.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## conclusion
 Lastly, i want to thank daneden for his animate.css for inspiration. have fun!

