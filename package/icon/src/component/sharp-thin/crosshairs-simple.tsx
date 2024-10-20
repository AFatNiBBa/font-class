
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=sharp-thin crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.9 248L392 248l-8 0 0 16 8 0 103.9 0C491.7 390.2 390.2 491.7 264 495.9L264 392l0-8-16 0 0 8 0 103.9C121.8 491.7 20.3 390.2 16.1 264L120 264l8 0 0-16-8 0L16.1 248C20.3 121.8 121.8 20.3 248 16.1L248 120l0 8 16 0 0-8 0-103.9C390.2 20.3 491.7 121.8 495.9 248zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default CrosshairsSimple;