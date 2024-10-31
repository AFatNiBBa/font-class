
import { Icon } from "../../index";

/**
 * A component that renders the `send-back` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=sharp-solid send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 64l0 128L64 192 64 64l128 0zM64 0L0 0 0 64 0 192l0 64 64 0 128 0 64 0 0-64 0-128 0-64L192 0 64 0zM576 320l0 128-128 0 0-128 128 0zM448 256l-64 0 0 64 0 128 0 64 64 0 128 0 64 0 0-64 0-128 0-64-64 0-128 0zM160 288l0 128 192 0 0-160 0-32 32 0 96 0 0-128L288 96l0 160 0 32-32 0-96 0z" />
    </Icon>
);

export default SendBack;