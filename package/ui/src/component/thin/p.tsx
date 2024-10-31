
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=thin p}
 * @preview ![p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/p.svg)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 48l160 0c66.3 0 120 53.7 120 120s-53.7 120-120 120L16 288 16 56c0-4.4 3.6-8 8-8zM16 304l168 0c75.1 0 136-60.9 136-136s-60.9-136-136-136L24 32C10.7 32 0 42.7 0 56L0 296 0 472c0 4.4 3.6 8 8 8s8-3.6 8-8l0-168z" />
    </Icon>
);

export default P;