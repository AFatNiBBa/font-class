
import { Icon } from "../../index";

/**
 * A component that renders the `d` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=sharp-light d}
 * @preview ![d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/d.svg)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l16 0 144 0c123.7 0 224 100.3 224 224s-100.3 224-224 224L16 480 0 480l0-16L0 48 0 32zM32 64l0 384 128 0c106 0 192-86 192-192s-86-192-192-192L32 64z" />
    </Icon>
);

export default D;