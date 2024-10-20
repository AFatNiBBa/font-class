
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=sharp-light p}
 * @preview ![p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/p.svg)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 32l16 0 160 0c79.5 0 144 64.5 144 144s-64.5 144-144 144L32 320l0 144 0 16L0 480l0-16L0 320l0-32L0 48 0 32zM32 288l144 0c61.9 0 112-50.1 112-112s-50.1-112-112-112L32 64l0 224z" />
    </Icon>
);

export default P;