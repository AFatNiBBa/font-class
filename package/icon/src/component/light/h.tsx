
import { Icon } from "../../index";

/**
 * A component that renders the `h` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=light h}
 * @preview ![h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/h.svg)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 256l0 208c0 8.8 7.2 16 16 16s16-7.2 16-16l0-240 0-176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 176L32 224 32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-208 320 0z" />
    </Icon>
);

export default H;