
import { Icon, generic } from "../../index";

/**
 * A component that renders the `staff` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/staff?s=sharp-duotone-solid staff}
 * @preview ![staff](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/staff.svg)
 */
const Staff: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 288l60.1 0c-20 20-40.1 40.1-60.1 60.1L96 288zm265.1-.7c27.5-7.9 55.1-15.7 82.6-23.6L413.7 317l-52.6-29.7z" />
        <path d="M306.3 0L336 0 464 0l48 0 0 48 0 160 0 36.2-34.8 9.9-212 60.6L105.9 473.9 72 507.9 4.1 440l33.9-33.9 168-168 8.8-8.8 12-3.4L416 171.8 416 96l-50.3 0-2.7 5.5-21.5 42.9-85.9-42.9 21.5-42.9 16-32L306.3 0z" />
    </Icon>
);

export default Staff;