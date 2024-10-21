
import { Icon } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=sharp-light paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 32l0 32 0 32 0 32L32 128l0-96 352 0zm32 32l0-32 0-32L384 0 32 0 0 0 0 32l0 96 0 32 32 0 352 0 32 0 0-32 0-32 0-32zM256 480l-64 0 0-128 64 0 0 128zM192 320l-32 0 0 32 0 128 0 32 32 0 64 0 32 0 0-32 0-128 0-32-32 0-16 0 0-64 256 0 16 0 0-16 0-160 0-16-16 0-48 0 0 32 32 0 0 128-256 0-16 0 0 16 0 80-16 0z" />
    </Icon>
);

export default PaintRoller;