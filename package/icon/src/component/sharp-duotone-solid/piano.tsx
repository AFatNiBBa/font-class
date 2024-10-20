
import { Icon, generic } from "../../index";

/**
 * A component that renders the `piano` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=sharp-duotone-solid piano}
 * @preview ![piano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/piano.svg)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L0 480l0 32 32 0 448 0 32 0 0-32 0-128-64 0 0 96L64 448l0-96L0 352z" />
        <path d="M0 192L0 352l96 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 64 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 96 0 0-64L384 224l0-32C384 86 298 0 192 0S0 86 0 192z" />
    </Icon>
);

export default Piano;