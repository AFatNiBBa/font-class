
import { Icon, generic } from "../../index";

/**
 * A component that renders the `icicles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=sharp-duotone-solid icicles}
 * @preview ![icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/icicles.svg)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M336 160c13.3-53.3 26.7-106.7 40-160L512 0 416 512 336 160z" />
        <path d="M96 352L0 0H376L288 352 240 192 192 416 144 192 96 352z" />
    </Icon>
);

export default Icicles;