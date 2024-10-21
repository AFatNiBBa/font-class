
import { Icon, generic } from "../../index";

/**
 * A component that renders the `info` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=duotone info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M48 80a48 48 0 1 0 96 0A48 48 0 1 0 48 80z" />
        <path d="M32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 192-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-224c0-17.7-14.3-32-32-32l-64 0z" />
    </Icon>
);

export default Info;