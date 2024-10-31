
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=sharp-duotone-solid magnifying-glass}
 * @preview ![magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass.svg)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm352 0A144 144 0 1 1 64 208a144 144 0 1 1 288 0z" />
        <path d="M330.7 376L441.4 486.6 464 509.3 509.3 464l-22.6-22.6L376 330.7C363.3 348 348 363.3 330.7 376z" />
    </Icon>
);

export default MagnifyingGlass;