
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=solid circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 96c8.8 0 16 7.2 16 16l0 16 64 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 32 0c17.7 0 32 14.3 32 32l0 32-256 0 0-32c0-17.7 14.3-32 32-32l32 0 0-16c0-8.8 7.2-16 16-16zM128 352l0-128 256 0 0 128c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default CircleCalendar;