
import { Icon } from "../../index";

/**
 * A component that renders the `send-back` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=sharp-thin send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 16l0 224L16 240 16 16l224 0zM16 0L0 0 0 16 0 240l0 16 16 0 224 0 16 0 0-16 0-224 0-16L240 0 16 0zM624 272l0 224-224 0 0-224 224 0zM400 256l-16 0 0 16 0 224 0 16 16 0 224 0 16 0 0-16 0-224 0-16-16 0-224 0zM160 288l0 112 0 16 16 0 176 0 0-16-176 0 0-112-16 0zM480 112l0-16-16 0L288 96l0 16 176 0 0 112 16 0 0-112zm-64 64l0-16-16 0-112 0 0 16 112 0 0 48 16 0 0-48zM240 336l0-48-16 0 0 48 0 16 16 0 112 0 0-16-112 0z" />
    </Icon>
);

export default SendBack;