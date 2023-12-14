# wallpaper

> Get or set the desktop wallpaper

Works on macOS 10.14.4+.

## Install

```sh
npm install macos-wallpaper
```

## Usage

```js
import {getWallpaper, setWallpaper} from 'wallpaper';

await setWallpaper('unicorn.jpg');

await getWallpaper();
//=> '/Users/sindresorhus/unicorn.jpg'
```

## API

### getWallpaper(options?)

Returns a `Promise<string>` with the path of the current desktop wallpaper.

#### options

Type: `object`

##### screen

Type: `string | number`\
Values: `'all'`, `'main'`, or the index of a screen from `.screens()`\
Default: `'main'`

The screen to get the wallpaper from.

If you set `'all'` then `getWallpaper()` will return a `Promise<string[]>`.

### setWallpaper(imagePath, options?)

Returns a `Promise`.

#### imagePath

Type: `string`

The path to the image to set as the desktop wallpaper.

#### options

Type: `object`

##### screen

Type: `string | number`\
Values: `'all'`, `'main'`, or the index of a screen from `.screens()`
Default: `'all'`

The screen to set the wallpaper on.

##### scale

Type: `string`\
Values: `'auto' | 'fill' | 'fit' | 'stretch' | 'center'`\
Default: `'auto'`

##### fillColor
Type: `string`

The color to set as a RGB Hex value. For example, `000000` for black.



Scaling method.

### setSolidColorWallpaper(color, options?)

Returns a `Promise`.

#### color

Type: `string`

The color to set as a RGB Hex value. For example, `000000` for black.

#### options

Type: `object`

##### screen

Type: `string | number`\
Values: `'all'`, `'main'`, or the index of a screen from `.screens()`
Default: `'all'`

The screen to set the wallpaper on.

```js
import {setSolidColorWallpaper} from 'wallpaper';

await setSolidColorWallpaper('000000');
```

### screens()

Returns a `Promise<string[]>` with the available screens.

```js
import {screens} from 'wallpaper';

await screens();
//=> ['Color LCD']
```

## Related

- [macos-wallpaper](https://github.com/sindresorhus/macos-wallpaper) - macOS binary used in this module
