
import { Icon } from "../../index";

/**
 * A component that renders the `fill` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=sharp-thin fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path d="M11.3 283.3L0 272l11.3-11.3 135-135-104-104L36.7 16 48 4.7l5.7 5.7 104 104 103-103L272 0l11.3 11.3L500.7 228.7 512 240l-11.3 11.3L251.3 500.7 240 512l-11.3-11.3L32 304s0 0 0 0s0 0 0 0L11.3 283.3zM54.6 304L240 489.4 425.4 304 54.6 304zm386.7-16l48-48L272 22.6l-103 103 84.7 84.7 5.7 5.7L248 227.3l-5.7-5.7L157.7 137 22.6 272l16 16 402.7 0z" />
    </Icon>
);

export default Fill;