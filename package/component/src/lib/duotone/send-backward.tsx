
import { Icon, generic } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=duotone send-backward}
 * @preview ![send-backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/send-backward.svg)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 224l0 128 0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0-128 0c-35.3 0-64 28.7-64 64zm64 0l224 0 0 224-224 0 0-224z" />
        <path d="M0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 96-128 0c-35.3 0-64 28.7-64 64l0 128-96 0c-35.3 0-64-28.7-64-64L0 64z" />
    </Icon>
);

export default SendBackward;