
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=sharp-solid semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M160 64l0 128L32 192 32 64l128 0zM16 512L48 288l112 0L80 512l-64 0z" />
    </Icon>
);

export default Semicolon;