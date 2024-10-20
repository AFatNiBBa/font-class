
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=light t}
 * @preview ![t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/t.svg)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l160 0 0 400c0 8.8 7.2 16 16 16s16-7.2 16-16l0-400 160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L192 32 16 32z" />
    </Icon>
);

export default T;