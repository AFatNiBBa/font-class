
import { Icon } from "../../index";

/**
 * A component that renders the `h` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=sharp-regular h}
 * @preview ![h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/h.svg)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 256l0 200 0 24 48 0 0-24 0-232 0-168 0-24-48 0 0 24 0 152L48 208 48 56l0-24L0 32 0 56 0 456l0 24 48 0 0-24 0-200 288 0z" />
    </Icon>
);

export default H;