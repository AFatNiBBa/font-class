
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=duotone bars-staggered}
 * @preview ![bars-staggered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bars-staggered.svg)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32z" />
        <path d="M448 96c0-17.7-14.3-32-32-32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32L32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default BarsStaggered;