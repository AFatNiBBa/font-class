
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=sharp-thin p}
 * @preview ![p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/p.svg)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 32l8 0 176 0c75.1 0 136 60.9 136 136s-60.9 136-136 136L16 304l0 168 0 8L0 480l0-8L0 304l0-16L0 40l0-8zM16 288l168 0c66.3 0 120-53.7 120-120s-53.7-120-120-120L16 48l0 240z" />
    </Icon>
);

export default P;