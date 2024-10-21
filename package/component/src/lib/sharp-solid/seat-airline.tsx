
import { Icon } from "../../index";

/**
 * A component that renders the `seat-airline` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seat-airline?s=sharp-solid seat-airline}
 * @preview ![seat-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/seat-airline.svg)
 */
const SeatAirline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32L64 0 0 0 0 32 0 160l0 6.6 2.6 6 96 224 8.3 19.4 21.1 0 88 0 0 48-96 0-24 0 0 48 24 0 240 0 24 0 0-48-24 0-96 0 0-48 112 0 22.2 0 7.8-20.8 24-64L446.2 288 400 288l-278.3 0L108 256l212 0 32 0 0-64-32 0L80.5 192 64 153.4 64 32z" />
    </Icon>
);

export default SeatAirline;