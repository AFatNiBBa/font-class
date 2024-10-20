
import { Icon, generic } from "../../index";

/**
 * A component that renders the `archway` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=sharp-duotone-solid archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 64 32 0 96 0 32 0 0-64 0-64c0-53 43-96 96-96s96 43 96 96l0 64 0 64 32 0 96 0 32 0 0-64-32 0 0-224L32 192l0 224L0 416zM32 96l0 64 448 0 0-64L32 96z" />
        <path d="M32 32L0 32 0 96l32 0 448 0 32 0 0-64-32 0L32 32zM480 160L32 160l0 32 448 0 0-32z" />
    </Icon>
);

export default Archway;