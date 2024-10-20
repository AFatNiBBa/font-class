
import { Icon, generic } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=sharp-duotone-solid send-backward}
 * @preview ![send-backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/send-backward.svg)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 160l192 0 160 0 0 352-352 0 0-160 0-192zm64 64l0 224 224 0 0-224-224 0z" />
        <path d="M352 0L0 0 0 352l160 0 0-192 192 0L352 0z" />
    </Icon>
);

export default SendBackward;