
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=sharp-solid hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 0L0 0 0 64l32 0 0 64 0 13.3 9.4 9.4L146.7 256 41.4 361.4 32 370.7 32 384l0 64L0 448l0 64 32 0 298.8 0c-23.3-16.4-42.5-38.4-55.6-64L96 448l0-50.7 96-96 64 64c.4-26.2 6.5-51.1 17.2-73.3l-36-36L342.6 150.6l9.4-9.4 0-13.3 0-64 32 0 0-64L352 0 32 0zM288 64l0 50.7-96 96-96-96L96 64l192 0zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM448 288l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0z" />
    </Icon>
);

export default HourglassClock;