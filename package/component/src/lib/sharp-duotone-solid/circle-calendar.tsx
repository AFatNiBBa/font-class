
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=sharp-duotone-solid circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 128l64 0 0-32 32 0 0 32 64 0 0-32 32 0 0 32 64 0 0 96 0 160-256 0 0-160 0-96z" />
        <path d="M192 96l32 0 0 32 64 0 0-32 32 0 0 32 64 0 0 96-256 0 0-96 64 0 0-32z" />
    </Icon>
);

export default CircleCalendar;