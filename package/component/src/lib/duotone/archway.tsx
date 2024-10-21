
import { Icon, generic } from "../../index";

/**
 * A component that renders the `archway` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=duotone archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448c0 17.7 14.3 32 32 32l96 0 32 0 0-64 0-64c0-53 43-96 96-96s96 43 96 96l0 64 0 64 32 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-224L32 192l0 224c-17.7 0-32 14.3-32 32zM32 96l0 64 448 0 0-64L32 96z" />
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM480 160L32 160l0 32 448 0 0-32z" />
    </Icon>
);

export default Archway;