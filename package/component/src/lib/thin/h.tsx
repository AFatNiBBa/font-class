
import { Icon } from "../../index";

/**
 * A component that renders the `h` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=thin h}
 * @preview ![h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/h.svg)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 240l0 232c0 4.4 3.6 8 8 8s8-3.6 8-8l0-432c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 184L16 224 16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 472c0 4.4 3.6 8 8 8s8-3.6 8-8l0-232 352 0z" />
    </Icon>
);

export default H;