
import { Icon } from "../../index";

/**
 * A component that renders the `snake` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snake?s=light snake}
 * @preview ![snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/snake.svg)
 */
const Snake: typeof Icon = x => (
    <Icon {...x}>
        <path d="M293.9 88L277 88l-97 0C115.9 88 64 139.9 64 204s51.9 116 116 116l164 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-87.9 0c0 0 0 0 0 0s0 0-.1 0s0 0 0 0l-140.8 0c-8.4 0-16.8 1.7-24.6 4.9L44.8 456l45.8 19.1c7.8 3.3 16.2 4.9 24.6 4.9l60.7 0c0 0 0 0 0 0c0 0 .1 0 .1 0c0 0 0 0 0 0l168 0c57.4 0 104-46.6 104-104s-46.6-104-104-104l-164 0c-37.6 0-68-30.4-68-68s30.4-68 68-68l92 0 17.1 0 9.5 14.2c14.1 21.1 37.7 33.8 63.1 33.8l4.5 0c12.3 0 24.5-2.7 35.6-7.9L455 151.3c15.3-7.1 25-22.5 25-39.3s-9.8-32.2-25-39.3L400.5 47.3C390.2 42.5 379 40 367.7 40c-25.8 0-49.9 12.8-64.2 34l-9.5 14zM176 512l-.1 0-60.7 0c-12.7 0-25.2-2.5-36.9-7.4L14.8 478.2C5.8 474.4 0 465.7 0 456s5.8-18.4 14.8-22.2l63.5-26.5c11.7-4.9 24.2-7.4 36.9-7.4L256 400l.1 0 87.9 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-164 0C98.3 352 32 285.7 32 204S98.3 56 180 56l97 0c20.3-29.9 54.2-48 90.7-48c16 0 31.9 3.5 46.4 10.3l54.4 25.4C495 56.1 512 82.7 512 112s-17 55.9-43.5 68.3l-53.1 24.8c-8.7 4-17.8 7-27.1 8.8c-7.2 1.4-14.6 2.1-22 2.1l-4.5 0c-6 0-11.9-.5-17.7-1.5c-8-1.3-15.7-3.5-23.1-6.5c-19.7-8-36.8-21.8-48.9-40l-92 0c-19.9 0-36 16.1-36 36s16.1 36 36 36l135.1 0 28.9 0c6 0 11.9 .4 17.7 1.1c1.5 .2 3 .4 4.5 .7c6.8 1.1 13.5 2.8 19.9 4.8C440.6 264.4 480 315.6 480 376c0 75.1-60.9 136-136 136l-168 0zM352 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Snake;