
import { Icon } from "../../index";

/**
 * A component that renders the `image` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image?s=sharp-light image}
 * @preview ![image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/image.svg)
 */
const Image: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 265.4 84.7-84.7L128 233.4l11.3 11.3L224 329.4 372.7 180.7 384 169.4l11.3 11.3L480 265.4 480 64 32 64zm0 310.6L32 448l73.4 0 96-96L128 278.6l-96 96zm352-160L150.6 448 480 448l0-137.4-96-96zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM160 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-64 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Image;