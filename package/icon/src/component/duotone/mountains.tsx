
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountains` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=duotone mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M412.7 249.7l48.2-79C465 164.1 472.2 160 480 160s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8c0 33.8-27.4 61.1-61.1 61.1l-122.8 0c30.9 0 55.9-25 55.9-55.9c0-10.5-3-20.8-8.6-29.7c-30.3-48.2-60.5-96.4-90.7-144.6z" />
        <path d="M55.9 480H456.1c30.9 0 55.9-25 55.9-55.9c0-10.5-3-20.8-8.6-29.7L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1C0 455 25 480 55.9 480z" />
    </Icon>
);

export default Mountains;