
import { Icon } from "../../index";

/**
 * A component that renders the `send-back` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=sharp-regular send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 48l0 160L48 208 48 48l160 0zM48 0L0 0 0 48 0 208l0 48 48 0 160 0 48 0 0-48 0-160 0-48L208 0 48 0zM592 304l0 160-160 0 0-160 160 0zM432 256l-48 0 0 48 0 160 0 48 48 0 160 0 48 0 0-48 0-160 0-48-48 0-160 0zM160 288l0 128 192 0 0-160 0-32 32 0 96 0 0-128L288 96l0 160 0 32-32 0-96 0z" />
    </Icon>
);

export default SendBack;