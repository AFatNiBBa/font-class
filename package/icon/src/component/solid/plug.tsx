
import { Icon } from "../../index";

/**
 * A component that renders the `plug` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=solid plug}
 * @preview ![plug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/plug.svg)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" />
    </Icon>
);

export default Plug;