
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=sharp-solid circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 96l0 32 64 0 0-32 32 0 0 32 64 0 0 64-256 0 0-64 64 0 0-32 32 0zM128 384l0-160 256 0 0 160-256 0z" />
    </Icon>
);

export default CircleCalendar;