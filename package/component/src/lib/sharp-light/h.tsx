
import { Icon } from "../../index";

/**
 * A component that renders the `h` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=sharp-light h}
 * @preview ![h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/h.svg)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 256l0 208 0 16 32 0 0-16 0-208 0-32 0-176 0-16-32 0 0 16 0 176L32 224 32 48l0-16L0 32 0 48 0 224l0 32L0 464l0 16 32 0 0-16 0-208 320 0z" />
    </Icon>
);

export default H;