
import { Icon } from "../../index";

/**
 * A component that renders the `magnet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=sharp-regular magnet}
 * @preview ![magnet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/magnet.svg)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l24 0 112 0 24 0 0 24 0 200c0 35.3 28.7 64 64 64s64-28.7 64-64l0-200 0-24 24 0 112 0 24 0 0 24 0 200c0 123.7-100.3 224-224 224S0 379.7 0 256L0 56 0 32zM48 256c0 97.2 78.8 176 176 176s176-78.8 176-176l0-64-64 0 0 64c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-64-64 0 0 64z" />
    </Icon>
);

export default Magnet;