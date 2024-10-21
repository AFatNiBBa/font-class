
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=sharp-light calendar-image}
 * @preview ![calendar-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-image.svg)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l0 16 0 48 192 0 0-48 0-16 32 0 0 16 0 48 64 0 32 0 0 32 0 64 0 32 0 288 0 32-32 0L32 512 0 512l0-32L0 192l0-32L0 96 0 64l32 0 64 0 0-48L96 0l32 0zM416 192L32 192l0 288 384 0 0-288zm0-96L32 96l0 64 384 0 0-64zM250.9 252.1l13.3 18.6L373 422.7 391.1 448 360 448 88 448l-30.8 0 17.7-25.2 68-96.7 11-15.7L167.4 324l20.3 20.7L238 271l12.9-18.9zm.6 55.9l-48.3 70.9-11 16.1L178.6 381l-20.5-20.9L118.8 416l210.1 0L251.5 307.9zM96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CalendarImage;