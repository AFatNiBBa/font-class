
import { Icon } from "../../index";

/**
 * A component that renders the `golf-club` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=sharp-thin golf-club}
 * @preview ![golf-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/golf-club.svg)
 */
const GolfClub: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496.8 4.4L309.6 378.8l-299.6-81L0 295.2l0 10.4L0 376l0 16 0 48 0 16 0 48 0 8 8 0 248 0 4.9 0 2.2-4.4L321 391.8 511.2 11.6 496.8 4.4zM16 456l64 0 8 0 0-16-8 0-64 0 0-48 64 0 8 0 0-16-8 0-64 0 0-60 286.3 77.4L251.1 496 16 496l0-40z" />
    </Icon>
);

export default GolfClub;