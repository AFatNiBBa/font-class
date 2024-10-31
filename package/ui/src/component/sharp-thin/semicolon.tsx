
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=sharp-thin semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 80l0 96 96 0 0-96L48 80zM32 64l16 0 96 0 16 0 0 16 0 96 0 16-16 0-96 0-16 0 0-16 0-96 0-16zM63 496l81-132.5 0-59.5-82.6 0L27.1 496 63 496zm-52.2 0L48 288l96 0 16 0 0 16 0 64L72 512l-47.7 0L8 512l2.9-16z" />
    </Icon>
);

export default Semicolon;