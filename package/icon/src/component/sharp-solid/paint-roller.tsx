
import { Icon } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=sharp-solid paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L416 0l0 64 0 64 0 64L0 192 0 0zM256 320l32 0 0 192-128 0 0-192 32 0 0-64 0-32 32 0 224 0 0-64 0-32 0-64 32 0 32 0 0 32 0 160 0 32-32 0-224 0 0 32z" />
    </Icon>
);

export default PaintRoller;