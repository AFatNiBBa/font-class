
import { Icon, generic } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=sharp-duotone-solid semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M16 512l64 0 80-224L48 288 16 512z" />
        <path d="M32 64H160V192H32V64z" />
    </Icon>
);

export default Semicolon;