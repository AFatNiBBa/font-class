
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=sharp-thin calendar-image}
 * @preview ![calendar-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/calendar-image.svg)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l0 8 0 56 192 0 0-56 0-8 16 0 0 8 0 56 96 0 16 0 0 16 0 96 0 16 0 304 0 16-16 0L16 512 0 512l0-16L0 192l0-16L0 80 0 64l16 0 96 0 0-56 0-8 16 0zM432 192L16 192l0 304 416 0 0-304zM112 120l0-40L16 80l0 96 416 0 0-96-96 0 0 40 0 8-16 0 0-8 0-40L128 80l0 40 0 8-16 0 0-8zM255.8 250.2l6.6 9.1 128 176 9.2 12.7L384 448 64 448l-15.5 0 9-12.6 80-112 5.5-7.7 6.7 6.7 33.2 33.2 66.5-96.1 6.4-9.3zm.3 27.6l-65.6 94.7-5.5 7.9-6.8-6.8L145 340.3 79.5 432l288.7 0L256.2 277.8zM96 272a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default CalendarImage;