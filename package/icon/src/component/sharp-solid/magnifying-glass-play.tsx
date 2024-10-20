
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-play` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-play?s=sharp-solid magnifying-glass-play}
 * @preview ![magnifying-glass-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/magnifying-glass-play.svg)
 */
const MagnifyingGlassPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376 330.7c25.2-34.4 40-76.8 40-122.7C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416c45.9 0 88.3-14.9 122.7-40L441.4 486.6 464 509.3 509.3 464l-22.6-22.6L376 330.7zM145.8 116.2l24 14 110.2 64L303.9 208 280 221.8l-110.2 64-24 14 0-27.8 0-128 0-27.8z" />
    </Icon>
);

export default MagnifyingGlassPlay;