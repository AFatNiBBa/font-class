
import { Icon } from "../../index";

/**
 * A component that renders the `seat-airline` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seat-airline?s=solid seat-airline}
 * @preview ![seat-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/seat-airline.svg)
 */
const SeatAirline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 143.6c0 15.2 3.1 30.2 9.1 44.1L82 357.8c15.1 35.3 49.8 58.2 88.2 58.2l45.8 0 0 48-96 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0 0-48 96 0c15.1 0 29.3-7.1 38.4-19.2l43.2-57.6c7.3-9.7 8.4-22.7 3-33.5S428.1 288 416 288l-294.3 0L108 256l212 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80.5 192 67.9 162.5c-2.6-6-3.9-12.4-3.9-18.9L64 32z" />
    </Icon>
);

export default SeatAirline;