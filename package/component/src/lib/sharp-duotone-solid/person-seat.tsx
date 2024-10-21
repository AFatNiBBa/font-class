
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=sharp-duotone-solid person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 32L0 416l0 32 32 0 160 0 32 0 0-64-32 0L64 384l0-224 0-32L0 128z" />
        <path d="M96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zm0 80l32 0 32 0 32 0 0 32 64 0 32 0 0 64-32 0-64 0 0 32 96 0 28.2 0 3.5 28 12.5 100 19.8 0 32 0 0 64-32 0-48 0-28.2 0-3.5-28L259.8 352 160 352c-35.3 0-64-28.7-64-64l0-96 0-32z" />
    </Icon>
);

export default PersonSeat;