
import { Icon } from "../../index";

/**
 * A component that renders the `golf-club` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=solid golf-club}
 * @preview ![golf-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/golf-club.svg)
 */
const GolfClub: typeof Icon = x => (
    <Icon {...x}>
        <path d="M508.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L264 392.5l0-.5L42.1 318C21.4 311.1 0 326.6 0 348.4L0 376l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 408l0 32 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 472l0 8c0 17.7 14.3 32 32 32l223.3 0c12 .3 23.6-6.3 29.3-17.7l224-448z" />
    </Icon>
);

export default GolfClub;