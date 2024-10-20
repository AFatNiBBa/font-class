
import { Icon } from "../../index";

/**
 * A component that renders the `d` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=sharp-thin d}
 * @preview ![d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/d.svg)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l8 0 152 0c123.7 0 224 100.3 224 224s-100.3 224-224 224L8 480l-8 0 0-8L0 40l0-8zM16 48l0 416 144 0c114.9 0 208-93.1 208-208s-93.1-208-208-208L16 48z" />
    </Icon>
);

export default D;