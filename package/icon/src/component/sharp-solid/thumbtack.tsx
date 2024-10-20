
import { Icon } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=sharp-solid thumbtack}
 * @preview ![thumbtack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/thumbtack.svg)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0L32 0l0 64 32 0 29.5 0L82.1 212.1C23.7 240.7 0 293 0 320l0 32 384 0 0-32c0-22.5-23.7-76.5-82.1-106.7L290.5 64 320 64l32 0 0-64L320 0 64 0zm96 480l0 32 64 0 0-32 0-96-64 0 0 96z" />
    </Icon>
);

export default Thumbtack;