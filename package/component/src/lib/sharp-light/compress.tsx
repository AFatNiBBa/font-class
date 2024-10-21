
import { Icon } from "../../index";

/**
 * A component that renders the `compress` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress?s=sharp-light compress}
 * @preview ![compress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/compress.svg)
 */
const Compress: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 48l0-16-32 0 0 16 0 112L16 160 0 160l0 32 16 0 128 0 16 0 0-16 0-128zM16 320L0 320l0 32 16 0 112 0 0 112 0 16 32 0 0-16 0-128 0-16-16 0L16 320zM320 48l0-16-32 0 0 16 0 128 0 16 16 0 128 0 16 0 0-32-16 0-112 0 0-112zM304 320l-16 0 0 16 0 128 0 16 32 0 0-16 0-112 112 0 16 0 0-32-16 0-128 0z" />
    </Icon>
);

export default Compress;