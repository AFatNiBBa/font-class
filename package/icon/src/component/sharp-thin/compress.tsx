
import { Icon } from "../../index";

/**
 * A component that renders the `compress` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress?s=sharp-thin compress}
 * @preview ![compress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/compress.svg)
 */
const Compress: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 32l0 8 0 144 0 8-8 0L8 192l-8 0 0-16 8 0 136 0 0-136 0-8 16 0zm144 0l0 8 0 136 136 0 8 0 0 16-8 0-144 0-8 0 0-8 0-144 0-8 16 0zM0 320l8 0 144 0 8 0 0 8 0 144 0 8-16 0 0-8 0-136L8 336l-8 0 0-16zm288 0l8 0 144 0 8 0 0 16-8 0-136 0 0 136 0 8-16 0 0-8 0-144 0-8z" />
    </Icon>
);

export default Compress;