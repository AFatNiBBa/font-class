
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=sharp-duotone-solid bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 352l0 96 0 64 64 0 224 0 64 0 0-64 0-224 0-64-64 0-96 0 0 64 96 0 0 224-224 0 0-96-64 0z" />
        <path d="M0 352H352V0H0V352z" />
    </Icon>
);

export default BringForward;