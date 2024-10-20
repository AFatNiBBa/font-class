
import { Icon } from "../../index";

/**
 * A component that renders the `plug` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=sharp-solid plug}
 * @preview ![plug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plug.svg)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 0L64 0l0 32 0 96 64 0 0-96 0-32zM320 0L256 0l0 32 0 96 64 0 0-96 0-32zM32 160L0 160l0 64 32 0 0 32c0 77.4 55 142 128 156.8l0 99.2 64 0 0-99.2C297 398 352 333.4 352 256l0-32 32 0 0-64-32 0L32 160z" />
    </Icon>
);

export default Plug;