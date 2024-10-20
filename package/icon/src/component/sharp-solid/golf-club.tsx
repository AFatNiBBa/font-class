
import { Icon } from "../../index";

/**
 * A component that renders the `golf-club` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=sharp-solid golf-club}
 * @preview ![golf-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/golf-club.svg)
 */
const GolfClub: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 512L0 512l0-40 48 0 16 0 0-32-16 0L0 440l0-32 48 0 16 0 0-32-16 0L0 376l0-72 264 88 0 .5L451.4 17.7l57.2 28.6-224 448L275.8 512 256 512l-32 0z" />
    </Icon>
);

export default GolfClub;