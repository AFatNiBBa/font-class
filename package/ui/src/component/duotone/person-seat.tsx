
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=duotone person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 320c0 70.7 57.3 128 128 128l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-35.3 0-64-28.7-64-64l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zm96 176l0 32 53.6 0c40.3 0 74.4 30 79.4 70.1l7.2 57.9 19.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-16.1 0-29.8-12-31.8-28l-10.7-86c-1-8-7.8-14-15.9-14L160 352c-35.3 0-64-28.7-64-64l0-80c0-26.5 21.5-48 48-48c20.9 0 38.7 13.4 45.3 32l66.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0z" />
    </Icon>
);

export default PersonSeat;