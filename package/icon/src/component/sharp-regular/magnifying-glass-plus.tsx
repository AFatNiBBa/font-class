
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-plus?s=sharp-regular magnifying-glass-plus}
 * @preview ![magnifying-glass-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/magnifying-glass-plus.svg)
 */
const MagnifyingGlassPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9l124 124 17 17L512 478.1l-17-17-124-124C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm-24-96l48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64 0 24z" />
    </Icon>
);

export default MagnifyingGlassPlus;