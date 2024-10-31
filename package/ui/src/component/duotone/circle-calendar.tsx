
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=duotone circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96c0-17.7 14.3-32 32-32l32 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 64 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 32 0c17.7 0 32 14.3 32 32l0 64 0 128c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-128 0-64z" />
        <path d="M192 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 64 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 32 0c17.7 0 32 14.3 32 32l0 64-256 0 0-64c0-17.7 14.3-32 32-32l32 0 0-16z" />
    </Icon>
);

export default CircleCalendar;