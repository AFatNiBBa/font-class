
import { Icon } from "../../index";

/**
 * A component that renders the `o` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/o?s=sharp-regular o}
 * @preview ![o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/o.svg)
 */
const O: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 80a176 176 0 1 0 0 352 176 176 0 1 0 0-352zM448 256A224 224 0 1 1 0 256a224 224 0 1 1 448 0z" />
    </Icon>
);

export default O;