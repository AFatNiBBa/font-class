
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-arrow-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-arrow-right?s=sharp-regular magnifying-glass-arrow-right}
 * @preview ![magnifying-glass-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/magnifying-glass-arrow-right.svg)
 */
const MagnifyingGlassArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9l124 124 17 17L512 478.1l-17-17-124-124C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm33-289l-17-17L190.1 144l17 17 23 23L128 184l-24 0 0 48 24 0 102.1 0-23 23-17 17L224 305.9l17-17 64-64 17-17-17-17-64-64z" />
    </Icon>
);

export default MagnifyingGlassArrowRight;