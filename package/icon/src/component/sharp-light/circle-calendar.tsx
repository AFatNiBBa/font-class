
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=sharp-light circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM224 96l0 16 0 16 64 0 0-16 0-16 32 0 0 16 0 16 32 0 32 0 0 32 0 32 0 32 0 128 0 32-32 0-192 0-32 0 0-32 0-128 0-32 0-32 0-32 32 0 32 0 0-16 0-16 32 0zm-32 64l-32 0 0 32 192 0 0-32-32 0-32 0-64 0-32 0zm160 64l-192 0 0 128 192 0 0-128z" />
    </Icon>
);

export default CircleCalendar;