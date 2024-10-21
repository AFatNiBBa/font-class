
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-clock?s=sharp-solid alarm-clock}
 * @preview ![alarm-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/alarm-clock.svg)
 */
const AlarmClock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M161.3 25.6C144.1 9.7 121.2 0 96 0C43 0 0 43 0 96c0 19 5.5 36.6 15 51.5L161.3 25.6zM256 512c50.3 0 96.8-16.6 134.2-44.6l19.2 19.2L432 509.3 477.3 464l-22.6-22.6-19.2-19.2c28-37.4 44.6-83.8 44.6-134.2C480 164.3 379.7 64 256 64S32 164.3 32 288c0 50.3 16.6 96.8 44.6 134.2L57.4 441.4 34.7 464 80 509.3l22.6-22.6 19.2-19.2c37.4 28 83.8 44.6 134.1 44.6zM498.3 147.5c9.5-14.9 15-32.6 15-51.5c0-53-43-96-96-96C392.1 0 369.1 9.7 352 25.6L498.3 147.5zM280 184l0 94.1 41 41 17 17L304 369.9l-17-17-48-48-7-7 0-9.9 0-104 0-24 48 0 0 24z" />
    </Icon>
);

export default AlarmClock;