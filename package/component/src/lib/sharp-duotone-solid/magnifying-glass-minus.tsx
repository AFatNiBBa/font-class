
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-minus?s=sharp-duotone-solid magnifying-glass-minus}
 * @preview ![magnifying-glass-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass-minus.svg)
 */
const MagnifyingGlassMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm112-24l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
        <path d="M136 184l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0zM441.4 486.6L330.7 376C348 363.3 363.3 348 376 330.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6z" />
    </Icon>
);

export default MagnifyingGlassMinus;