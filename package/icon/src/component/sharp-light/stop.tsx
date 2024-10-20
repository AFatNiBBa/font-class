
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=sharp-light stop}
 * @preview ![stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stop.svg)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 96l0 320L32 416 32 96l320 0zM32 64L0 64 0 96 0 416l0 32 32 0 320 0 32 0 0-32 0-320 0-32-32 0L32 64z" />
    </Icon>
);

export default Stop;