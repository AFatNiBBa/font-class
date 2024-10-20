
import { Icon } from "../../index";

/**
 * A component that renders the `image` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image?s=sharp-thin image}
 * @preview ![image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/image.svg)
 */
const Image: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 308.7L122.3 250.3l5.7-5.7 5.7 5.7L224 340.7 378.3 186.3l5.7-5.7 5.7 5.7L496 292.7 496 48 16 48zm0 331.3L16 464l84.7 0 112-112L128 267.3 16 379.3zm368-176L123.3 464 496 464l0-148.7-112-112zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM168 160a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-96 0a56 56 0 1 1 112 0A56 56 0 1 1 72 160z" />
    </Icon>
);

export default Image;