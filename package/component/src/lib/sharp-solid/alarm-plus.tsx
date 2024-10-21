
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-plus?s=sharp-solid alarm-plus}
 * @preview ![alarm-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/alarm-plus.svg)
 */
const AlarmPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M14.9 146.4C5.5 131.6 0 114 0 95.2C0 42.6 42.6 0 95.2 0c25 0 47.8 9.6 64.8 25.4L14.9 146.4zM390.2 467.4C352.8 495.4 306.3 512 256 512s-96.8-16.6-134.1-44.6l-19.2 19.2L80 509.3 34.7 464l22.6-22.6 19.2-19.2C48.6 384.8 32 338.3 32 288C32 164.3 132.3 64 256 64s224 100.3 224 224c0 50.3-16.6 96.8-44.6 134.2l19.2 19.2L477.3 464 432 509.3l-22.6-22.6-19.2-19.2zM352 25.4C369 9.6 391.8 0 416.8 0C469.4 0 512 42.6 512 95.2c0 18.8-5.5 36.3-14.9 51.1L352 25.4zM280 176l-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64 0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24z" />
    </Icon>
);

export default AlarmPlus;