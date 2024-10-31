
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=sharp-regular hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 8 0 0 72 0 9.9 7 7 119 119L39 375l-7 7 0 9.9 0 72-8 0L0 464l0 48 24 0 306.8 0c-18.3-12.9-34.1-29.2-46.3-48L80 464l0-62.1 112-112 64.5 64.5c1.5-19.3 6-37.7 13.2-54.7L225.9 256 345 137l7-7 0-9.9 0-72 8 0 24 0 0-48L360 0 24 0zM304 48l0 62.1-112 112L80 110.1 80 48l224 0zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM448 288l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0z" />
    </Icon>
);

export default HourglassClock;