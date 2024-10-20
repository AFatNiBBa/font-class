
import { Icon } from "../../index";

/**
 * A component that renders the `golf-club` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=sharp-regular golf-club}
 * @preview ![golf-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/golf-club.svg)
 */
const GolfClub: typeof Icon = x => (
    <Icon {...x}>
        <path d="M466.5 13.3L293 360.4 31 281 0 271.6 0 304 0 488l0 24 24 0 232 0 14.8 0 6.6-13.3 232-464L466.5 13.3zM48 336.3L271.2 404l-30 60L48 464l0-16 32 0 16 0 0-32-16 0-32 0 0-16 32 0 16 0 0-32-16 0-32 0 0-31.7z" />
    </Icon>
);

export default GolfClub;