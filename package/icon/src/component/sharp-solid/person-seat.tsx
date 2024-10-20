
import { Icon } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=sharp-solid person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-16 32l-32 0 0 32 0 96c0 35.3 28.7 64 64 64l99.8 0 12.5 100 3.5 28 28.2 0 48 0 32 0 0-64-32 0-19.8 0L319.8 316l-3.5-28L288 288l-96 0 0-32 64 0 32 0 0-64-32 0-64 0 0-32-32 0-32 0zm-64 0l0-32L0 128l0 32L0 416l0 32 32 0 160 0 32 0 0-64-32 0L64 384l0-224z" />
    </Icon>
);

export default PersonSeat;