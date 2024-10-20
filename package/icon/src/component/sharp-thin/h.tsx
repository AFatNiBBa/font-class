
import { Icon } from "../../index";

/**
 * A component that renders the `h` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=sharp-thin h}
 * @preview ![h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/h.svg)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 240l0 232 0 8 16 0 0-8 0-432 0-8-16 0 0 8 0 184L16 224 16 40l0-8L0 32l0 8L0 472l0 8 16 0 0-8 0-232 352 0z" />
    </Icon>
);

export default H;