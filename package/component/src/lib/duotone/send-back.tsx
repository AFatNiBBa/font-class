
import { Icon, generic } from "../../index";

/**
 * A component that renders the `send-back` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=duotone send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L192 0c35.3 0 64 28.7 64 64l0 32 0 96c0 35.3-28.7 64-64 64l-32 0-96 0c-35.3 0-64-28.7-64-64L0 64zm64 0l0 128 128 0 0-128L64 64zM384 320c0-35.3 28.7-64 64-64l32 0 96 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-128 0c-35.3 0-64-28.7-64-64l0-32 0-96zm64 0l0 128 128 0 0-128-128 0z" />
        <path d="M160 352l0-96 32 0c35.3 0 64-28.7 64-64l0-96 160 0c35.3 0 64 28.7 64 64l0 96-32 0c-35.3 0-64 28.7-64 64l0 96-160 0c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default SendBack;