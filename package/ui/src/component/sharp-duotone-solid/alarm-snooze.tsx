
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alarm-snooze` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-snooze?s=sharp-duotone-solid alarm-snooze}
 * @preview ![alarm-snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/alarm-snooze.svg)
 */
const AlarmSnooze: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 288c0 50.3 16.6 96.8 44.6 134.2L57.4 441.4 34.7 464 80 509.3l22.6-22.6 19.2-19.2c37.4 28 83.8 44.6 134.1 44.6s96.8-16.6 134.2-44.6l19.2 19.2L432 509.3 477.3 464l-22.6-22.6-19.2-19.2c28-37.4 44.6-83.8 44.6-134.2C480 164.3 379.7 64 256 64S32 164.3 32 288zm143.2 96L195 348.3 255.2 240 200 240l-24 0 0-48 24 0 96 0 40.8 0L317 227.7 256.8 336l55.2 0 24 0 0 48-24 0-96 0-40.8 0z" />
        <path d="M160.9 25.5C143.8 9.7 120.9 0 95.8 0C42.9 0 0 42.9 0 95.8c0 18.9 5.5 36.5 14.9 51.4L160.9 25.5zm190.3 0L497.1 147.2c9.5-14.8 14.9-32.5 14.9-51.4C512 42.9 469.1 0 416.2 0c-25.1 0-48 9.7-65.1 25.5zM200 192l-24 0 0 48 24 0 55.2 0L195 348.3 175.2 384l40.8 0 96 0 24 0 0-48-24 0-55.2 0L317 227.7 336.8 192 296 192l-96 0z" />
    </Icon>
);

export default AlarmSnooze;