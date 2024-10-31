
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snooze` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=sharp-duotone-solid snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 0l32 0 96 0 32 0 0 32 0 8 0 11.8-7.7 9L254.7 128l33.3 0 32 0 0 64-32 0-96 0-32 0 0-32 0-8 0-11.8 7.7-9L225.3 64 192 64l-32 0 0-64zM288 224l32 0 96 0 32 0 0 32 0 8 0 11.8-7.7 9L382.7 352l33.3 0 32 0 0 64-32 0-96 0-32 0 0-32 0-8 0-11.8 7.7-9L353.3 288 320 288l-32 0 0-64z" />
        <path d="M0 256l32 0 160 0 32 0 0 32 0 16 0 13.3-9.4 9.4L93.3 448l98.7 0 32 0 0 64-32 0L32 512 0 512l0-32 0-16 0-13.3 9.4-9.4L130.7 320 32 320 0 320l0-64z" />
    </Icon>
);

export default Snooze;