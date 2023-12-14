export type GetOptions = {
	/**
	The screen to get the wallpaper from.

	Values: `all`, `main`, or the index of a screen from `.screens()`.

	@default 'main'
	 */
	readonly screen?: 'all' | 'main' | number;
};

export type SetOptions = {
	/**
	The screen to set the wallpaper on.

	Values: `all`, `main`, or the index of a screen from `.screens()`.

	@default 'all'
	 */
	readonly screen?: 'all' | 'main' | number;

	/**
	Scaling method.

	Values: `auto` `fill` `fit` `stretch` `center`.

	@default 'auto'
	 */
	readonly scale?: 'auto' | 'fill' | 'fit' | 'stretch' | 'center' | 'tile' | 'span';

	/**
	Fill color method.
	 */
	readonly fillColor?: string | undefined;
};

/**
Get the path to the wallpaper image currently set.

@returns The path of the current desktop wallpaper.

@example
```
import {getWallpaper} from 'wallpaper';

await getWallpaper();
//=> '/Users/sindresorhus/unicorn.jpg'
```
 */
export function getWallpaper(options?: GetOptions): Promise<string>;

/**
Set a new wallpaper.

@param imagePath - The path to the image to set as the desktop wallpaper.

@example
```
import {setWallpaper} from 'wallpaper';

await setWallpaper('unicorn.jpg');
```
 */
export function setWallpaper(imagePath: string, options?: SetOptions): Promise<void>;

/**
__macOS only.__

@returns The available screens.

@example
```
import {screens} from 'wallpaper';

await screens();
//=> ['Color LCD']
```
 */
export function screens(): Promise<string[]>;

/**
Set a solid color.

@param color - The color to set as a RGB Hex value. For example, `000000` for black.

@example
```
import {setSolidColorWallpaper} from 'wallpaper';

await setSolidColorWallpaper('000000');
```
 */
export function setSolidColorWallpaper(rgbHexColor: string, options?: SetOptions): Promise<void>;
