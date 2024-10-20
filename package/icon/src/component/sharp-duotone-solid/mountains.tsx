
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountains` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=sharp-duotone-solid mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M412.9 267.4c33 49.6 66.1 99.1 99.1 148.6l0 64 128 0 0-64L480 160 412.9 267.4z" />
        <path d="M0 416L256 32 512 416v64H0V416z" />
    </Icon>
);

export default Mountains;