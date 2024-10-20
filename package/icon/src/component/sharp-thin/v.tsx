
import { Icon } from "../../index";

/**
 * A component that renders the `v` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=sharp-thin v}
 * @preview ![v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/v.svg)
 */
const V: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M364.4 32l17.3 0L199.4 475l-2 5-10.7 0-2-5L2.3 32l17.3 0L192 451 364.4 32z" />
    </Icon>
);

export default V;