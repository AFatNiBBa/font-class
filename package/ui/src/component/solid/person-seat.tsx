
import { Icon } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=solid person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 160l0-32 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-66.7 0c-6.6-18.6-24.4-32-45.3-32c-26.5 0-48 21.5-48 48l0 80c0 35.3 28.7 64 64 64l85.6 0c8.1 0 14.9 6 15.9 14l10.7 86c2 16 15.6 28 31.8 28l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-19.8 0L325 358.1c-5-40-39-70.1-79.4-70.1L192 288zM64 160c0-17.7-14.3-32-32-32s-32 14.3-32 32L0 320c0 70.7 57.3 128 128 128l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-35.3 0-64-28.7-64-64l0-160z" />
    </Icon>
);

export default PersonSeat;