
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-play` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-play?s=regular magnifying-glass-play}
 * @preview ![magnifying-glass-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/magnifying-glass-play.svg)
 */
const MagnifyingGlassPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1zM161.8 130.1c5-2.9 11.1-2.8 16 0l110.2 64c4.9 2.9 8 8.1 8 13.8s-3 11-8 13.8l-110.2 64c-4.9 2.9-11.1 2.9-16 0s-8-8.1-8-13.9l0-128c0-5.7 3.1-11 8-13.9z" />
    </Icon>
);

export default MagnifyingGlassPlay;