
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=sharp-light arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-to-arc.svg)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c123.7 0 224 100.3 224 224l0 16 32 0 0-16C512 114.6 397.4 0 256 0S0 114.6 0 256l0 16 32 0 0-16C32 132.3 132.3 32 256 32zM396 309.4l-128-144-12-13.5-12 13.5-128 144-10.6 12 23.9 21.3 10.6-12L240 218.1 240 496l0 16 32 0 0-16 0-277.9L372 330.6l10.6 12 23.9-21.3-10.6-12z" />
    </Icon>
);

export default ArrowUpToArc;