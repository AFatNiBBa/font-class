
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=sharp-light cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 0l16 0 96 0 16 0 0 16 0 112 112 0 16 0 0 16 0 96 0 16-16 0-112 0 0 240 0 16-16 0-96 0-16 0 0-16 0-240L16 256 0 256l0-16 0-96 0-16 16 0 112 0 0-112 0-16zm32 32l0 112 0 16-16 0L32 160l0 64 112 0 16 0 0 16 0 240 64 0 0-240 0-16 16 0 112 0 0-64-112 0-16 0 0-16 0-112-64 0z" />
    </Icon>
);

export default Cross;