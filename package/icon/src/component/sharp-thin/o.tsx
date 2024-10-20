
import { Icon } from "../../index";

/**
 * A component that renders the `o` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/o?s=sharp-thin o}
 * @preview ![o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/o.svg)
 */
const O: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM448 256A224 224 0 1 1 0 256a224 224 0 1 1 448 0z" />
    </Icon>
);

export default O;