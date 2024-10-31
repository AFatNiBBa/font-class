
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=sharp-regular circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM224 112l0 16 0 16 64 0 0-16 0-16 32 0 0 16 0 16 16 0 48 0 0 48 0 32 0 96 0 48-48 0-160 0-48 0 0-48 0-96 0-32 0-48 48 0 16 0 0-16 0-16 32 0zM176 224l0 96 160 0 0-96-160 0z" />
    </Icon>
);

export default CircleCalendar;