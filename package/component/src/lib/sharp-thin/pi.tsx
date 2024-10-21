
import { Icon } from "../../index";

/**
 * A component that renders the `pi` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=sharp-thin pi}
 * @preview ![pi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pi.svg)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 64L0 64 0 80l8 0 120 0 0 277.2L65.8 435l12.5 10 64-80 1.8-2.2 0-2.8 0-280 160 0 0 360 0 8 8 0 80 0 4.9 0 2.2-4.4 16-32 3.6-7.2-14.3-7.2-3.6 7.2L387.1 432 320 432l0-352 120 0 8 0 0-16-8 0L144 64l-16 0L8 64z" />
    </Icon>
);

export default Pi;