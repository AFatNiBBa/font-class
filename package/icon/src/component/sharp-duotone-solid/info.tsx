
import { Icon, generic } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-duotone-solid info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M48 32l80 0 0 80-80 0 0-80z" />
        <path d="M32 192L0 192l0 64 32 0 32 0 0 192-32 0L0 448l0 64 32 0 32 0 64 0 32 0 32 0 0-64-32 0-32 0 0-224 0-32-32 0-64 0z" />
    </Icon>
);

export default Info;