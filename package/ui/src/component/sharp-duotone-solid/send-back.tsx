
import { Icon, generic } from "../../index";

/**
 * A component that renders the `send-back` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=sharp-duotone-solid send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 0 192 0l64 0 0 64 0 32 0 96 0 64-64 0-32 0-96 0L0 256l0-64L0 64 0 0zM64 64l0 128 128 0 0-128L64 64zM384 256l64 0 32 0 96 0 64 0 0 64 0 128 0 64-64 0-128 0-64 0 0-64 0-32 0-96 0-64zm64 64l0 128 128 0 0-128-128 0z" />
        <path d="M160 416l0-160 96 0 0-160 224 0 0 160-96 0 0 160-224 0z" />
    </Icon>
);

export default SendBack;