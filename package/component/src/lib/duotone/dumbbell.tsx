
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=duotone dumbbell}
 * @preview ![dumbbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dumbbell.svg)
 */
const Dumbbell: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l0-64c-17.7 0-32 14.3-32 32zm192-32l0 64 256 0 0-64-256 0zm416 0l0 64c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
        <path d="M128 32c-17.7 0-32 14.3-32 32l0 64-32 0c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32l-32 0zm384 0l-32 0c-17.7 0-32 14.3-32 32l0 384c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64 32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0 0-64c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default Dumbbell;