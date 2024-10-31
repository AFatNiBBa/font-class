
import { Icon } from "../../index";

/**
 * A component that renders the `down-long` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=sharp-light down-long}
 * @preview ![down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/down-long.svg)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M120 352l0-32 0-288 80 0 0 288 0 32 32 0 42.7 0L160 466.7 45.3 352 88 352l32 0zM32 320L0 320l0 32L137.4 489.4 160 512l22.6-22.6L320 352l0-32-32 0-24 0-32 0 0-32 0-256 0-32L200 0 120 0 88 0l0 32 0 256 0 32-32 0-24 0z" />
    </Icon>
);

export default DownLong;