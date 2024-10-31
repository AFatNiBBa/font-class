
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-minus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-minus?s=regular magnifying-glass-minus}
 * @preview ![magnifying-glass-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/magnifying-glass-minus.svg)
 */
const MagnifyingGlassMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L371.1 337.1C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
    </Icon>
);

export default MagnifyingGlassMinus;