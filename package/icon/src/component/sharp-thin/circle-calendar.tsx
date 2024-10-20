
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=sharp-thin circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM208 96l0 8 0 24 96 0 0-24 0-8 16 0 0 8 0 24 48 0 16 0 0 16 0 64 0 16 0 144 0 16-16 0-224 0-16 0 0-16 0-144 0-16 0-64 0-16 16 0 48 0 0-24 0-8 16 0zm-16 72l0-24-48 0 0 64 224 0 0-64-48 0 0 24 0 8-16 0 0-8 0-24-96 0 0 24 0 8-16 0 0-8zm176 56l-224 0 0 144 224 0 0-144z" />
    </Icon>
);

export default CircleCalendar;