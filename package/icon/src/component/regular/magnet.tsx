
import { Icon } from "../../index";

/**
 * A component that renders the `magnet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=regular magnet}
 * @preview ![magnet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/magnet.svg)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 256c0 97.2 78.8 176 176 176s176-78.8 176-176l0-64-64 0 0 64c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-64-64 0 0 64zM0 88C0 57.1 25.1 32 56 32l48 0c30.9 0 56 25.1 56 56l0 168c0 35.3 28.7 64 64 64s64-28.7 64-64l0-168c0-30.9 25.1-56 56-56l48 0c30.9 0 56 25.1 56 56l0 168c0 123.7-100.3 224-224 224S0 379.7 0 256L0 88z" />
    </Icon>
);

export default Magnet;