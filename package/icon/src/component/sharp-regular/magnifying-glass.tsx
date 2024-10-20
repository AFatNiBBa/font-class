
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=sharp-regular magnifying-glass}
 * @preview ![magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/magnifying-glass.svg)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1l124 124 17 17L478.1 512l-17-17-124-124z" />
    </Icon>
);

export default MagnifyingGlass;