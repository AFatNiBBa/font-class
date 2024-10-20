
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seat-airline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seat-airline?s=sharp-duotone-solid seat-airline}
 * @preview ![seat-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/seat-airline.svg)
 */
const SeatAirline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80.5 192L320 192l32 0 0 64-32 0-212 0c-9.1-21.3-18.3-42.7-27.4-64zM96 464l24 0 96 0 0-48 48 0 0 48 96 0 24 0 0 48-24 0-240 0-24 0 0-48z" />
        <path d="M64 0l0 32 0 121.4L121.7 288 400 288l46.2 0L430 331.2l-24 64L398.2 416 376 416l-248 0-21.1 0-8.3-19.4-96-224-2.6-6L0 160 0 32 0 0 64 0z" />
    </Icon>
);

export default SeatAirline;