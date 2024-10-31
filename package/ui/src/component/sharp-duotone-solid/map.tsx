
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=sharp-duotone-solid map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 32l0 384 192 64 0-384L192 32z" />
        <path d="M0 480L0 96 192 32l0 384L0 480zm384 0l0-384L576 32l0 384L384 480z" />
    </Icon>
);

export default Map;