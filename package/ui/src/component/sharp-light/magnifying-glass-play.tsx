
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-play` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-play?s=sharp-light magnifying-glass-play}
 * @preview ![magnifying-glass-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/magnifying-glass-play.svg)
 */
const MagnifyingGlassPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 384c51.7 0 99-18.8 135.3-50L487.9 510.5l22.6-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM145.8 153.2l0 109.6 0 37 32-18.6L272 226.5 303.9 208 272 189.5l-94.2-54.7-32-18.6 0 37zM240.1 208l-62.4 36.2 0-72.4L240.1 208z" />
    </Icon>
);

export default MagnifyingGlassPlay;