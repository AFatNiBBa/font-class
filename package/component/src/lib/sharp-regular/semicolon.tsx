
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=sharp-regular semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 104l0 48 48 0 0-48-48 0zM24 56l48 0 48 0 48 0 0 48 0 48 0 48-48 0-48 0-48 0 0-48 0-48 0-48zM64.5 512L16 512l6.9-48L48 288l64 0 48 0 0 48 0 48L80 512l-15.5 0zM89.6 336l-13 90.8L112 370.2l0-34.2-22.4 0z" />
    </Icon>
);

export default Semicolon;