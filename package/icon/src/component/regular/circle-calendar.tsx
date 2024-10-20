
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=regular circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM208 112c8.8 0 16 7.2 16 16l0 16 64 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 16 0c26.5 0 48 21.5 48 48l0 32 0 96c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-96 0-32c0-26.5 21.5-48 48-48l16 0 0-16c0-8.8 7.2-16 16-16zM176 320l160 0 0-96-160 0 0 96z" />
    </Icon>
);

export default CircleCalendar;