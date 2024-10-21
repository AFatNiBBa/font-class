
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=sharp-thin arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496C123.5 496 16 388.5 16 256l0-8L0 248l0 8C0 397.4 114.6 512 256 512s256-114.6 256-256l0-8-16 0 0 8c0 132.5-107.5 240-240 240zM121.9 162.8l-5.2 6.1L129 179.3l5.2-6.1L248 37.9 248 344l0 8 16 0 0-8 0-306.1L377.9 173.2l5.2 6.1L395.3 169l-5.2-6.1-128-152L256 3.6l-6.1 7.3-128 152z" />
    </Icon>
);

export default ArrowUpFromArc;