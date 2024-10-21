
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=duotone paint-roller}
 * @preview ![paint-roller](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paint-roller.svg)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 352l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-16c0-8.8 7.2-16 16-16l144 0c53 0 96-43 96-96l0-32c0-53-43-96-96-96l0 64c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-144 0c-44.2 0-80 35.8-80 80l0 16c-17.7 0-32 14.3-32 32z" />
        <path d="M64 0C28.7 0 0 28.7 0 64l0 64c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default PaintRoller;