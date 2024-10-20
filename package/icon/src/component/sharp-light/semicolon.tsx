
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=sharp-light semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 96l0 64 64 0 0-64L64 96zM32 64l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zM46.9 480L128 358.3l0-38.3-54.1 0L39.6 480l7.3 0zm-40 0L48 288l80 0 32 0 0 32 0 48L64 512l-31.3 0L0 512l6.9-32z" />
    </Icon>
);

export default Semicolon;