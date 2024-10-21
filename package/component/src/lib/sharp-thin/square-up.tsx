
import { Icon } from "../../index";

/**
 * A component that renders the `square-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up?s=sharp-thin square-up}
 * @preview ![square-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-up.svg)
 */
const SquareUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM192 256l0 112 64 0 0-112 0-16 16 0 64 0 0-1.4-112-112-112 112 0 1.4 64 0 16 0 0 16zm20.7-140.7L224 104l11.3 11.3L352 232l0 8 0 16-16 0-48 0-16 0 0 16 0 96 0 16-16 0-64 0-16 0 0-16 0-96 0-16-16 0-48 0-16 0 0-16 0-8L212.7 115.3z" />
    </Icon>
);

export default SquareUp;