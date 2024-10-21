
import { Icon } from "../../index";

/**
 * A component that renders the `seat-airline` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seat-airline?s=sharp-regular seat-airline}
 * @preview ![seat-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/seat-airline.svg)
 */
const SeatAirline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 24L48 0 0 0 0 24 0 160l0 5.1 2.1 4.7 104 232 6.4 14.2 15.5 0 88 0 0 48-96 0-24 0 0 48 24 0 240 0 24 0 0-48-24 0-96 0 0-48 104 0 16 0 6.2-14.8 40-96L444 272l-36 0-307.5 0L86.2 240 328 240l24 0 0-48-24 0L64.6 192 48 154.9 48 24zm95.5 344L122 320l250 0-20 48-208.5 0z" />
    </Icon>
);

export default SeatAirline;