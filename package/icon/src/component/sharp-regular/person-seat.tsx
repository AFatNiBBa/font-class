
import { Icon } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=sharp-regular person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-32 32l-24 0 0 24 0 120c0 30.9 25.1 56 56 56l40 0 75 0 13.2 99.2L275 480l21 0 64 0 24 0 0-48-24 0-43 0-13.2-99.2L301 312l-21 0-72 0 0-56 56 0 24 0 0-48-24 0-56 0 0-24 0-24-24 0-72 0zm48 48l0 104-16 0c-4.4 0-8-3.6-8-8l0-96 24 0zM48 152l0-24L0 128l0 24L0 424l0 24 24 0 176 0 24 0 0-48-24 0L48 400l0-248z" />
    </Icon>
);

export default PersonSeat;