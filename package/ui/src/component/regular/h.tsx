
import { Icon } from "../../index";

/**
 * A component that renders the `h` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=regular h}
 * @preview ![h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/h.svg)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 256l0 200c0 13.3 10.7 24 24 24s24-10.7 24-24l0-232 0-168c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152L48 208 48 56c0-13.3-10.7-24-24-24S0 42.7 0 56L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-200 288 0z" />
    </Icon>
);

export default H;