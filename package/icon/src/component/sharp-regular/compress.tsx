
import { Icon } from "../../index";

/**
 * A component that renders the `compress` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress?s=sharp-regular compress}
 * @preview ![compress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/compress.svg)
 */
const Compress: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 56l0-24-48 0 0 24 0 88-88 0L0 144l0 48 24 0 112 0 24 0 0-24 0-112zM24 320L0 320l0 48 24 0 88 0 0 88 0 24 48 0 0-24 0-112 0-24-24 0L24 320zM336 56l0-24-48 0 0 24 0 112 0 24 24 0 112 0 24 0 0-48-24 0-88 0 0-88zM312 320l-24 0 0 24 0 112 0 24 48 0 0-24 0-88 88 0 24 0 0-48-24 0-112 0z" />
    </Icon>
);

export default Compress;