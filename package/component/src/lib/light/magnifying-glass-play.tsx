
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-play` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-play?s=light magnifying-glass-play}
 * @preview ![magnifying-glass-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/magnifying-glass-play.svg)
 */
const MagnifyingGlassPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 384c51.7 0 99-18.8 135.3-50L484.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm40.1-208l-62.4 36.2 0-72.4L248.1 208zm47.9 0c0-5.7-3-11-8-13.8l-110.2-64c-4.9-2.9-11.1-2.9-16 0s-8 8.1-8 13.9l0 128c0 5.7 3.1 11 8 13.9s11.1 2.8 16 0l110.2-64c4.9-2.9 8-8.1 8-13.8z" />
    </Icon>
);

export default MagnifyingGlassPlay;