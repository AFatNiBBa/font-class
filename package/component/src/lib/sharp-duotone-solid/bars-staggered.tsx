
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=sharp-duotone-solid bars-staggered}
 * @preview ![bars-staggered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bars-staggered.svg)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 224l448 0 0 64L64 288l0-64z" />
        <path d="M448 64L0 64l0 64 448 0 0-64zm0 320L0 384l0 64 448 0 0-64z" />
    </Icon>
);

export default BarsStaggered;