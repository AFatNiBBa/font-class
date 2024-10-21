
import { Icon } from "../../index";

/**
 * A component that renders the `d` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=sharp-regular d}
 * @preview ![d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/d.svg)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l24 0 136 0c123.7 0 224 100.3 224 224s-100.3 224-224 224L24 480 0 480l0-24L0 56 0 32zM48 80l0 352 112 0c97.2 0 176-78.8 176-176s-78.8-176-176-176L48 80z" />
    </Icon>
);

export default D;