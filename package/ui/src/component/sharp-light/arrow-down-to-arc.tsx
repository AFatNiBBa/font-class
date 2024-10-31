
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=sharp-light arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480c123.7 0 224-100.3 224-224l0-16 32 0 0 16c0 141.4-114.6 256-256 256S0 397.4 0 256l0-16 32 0 0 16c0 123.7 100.3 224 224 224zM396 202.6l-128 144-12 13.5-12-13.5-128-144-10.6-12 23.9-21.3 10.6 12L240 293.9 240 16l0-16 32 0 0 16 0 277.9L372 181.4l10.6-12 23.9 21.3-10.6 12z" />
    </Icon>
);

export default ArrowDownToArc;