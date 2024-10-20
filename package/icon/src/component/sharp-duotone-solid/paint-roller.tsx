
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=sharp-duotone-solid paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 320l0 192 128 0 0-192-32 0 0-32 224 0 32 0 0-32 0-160 0-32-32 0-64 0 0 64 32 0 0 96-224 0-32 0 0 32 0 64-32 0z" />
        <path d="M416 0L0 0 0 192l416 0L416 0z" />
    </Icon>
);

export default PaintRoller;