
import { Icon } from "../../index";

/**
 * A component that renders the `send-back` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=sharp-light send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 32l0 192L32 224 32 32l192 0zM32 0L0 0 0 32 0 224l0 32 32 0 192 0 32 0 0-32 0-192 0-32L224 0 32 0zM608 288l0 192-192 0 0-192 192 0zM416 256l-32 0 0 32 0 192 0 32 32 0 192 0 32 0 0-32 0-192 0-32-32 0-192 0zM160 288l0 96 0 32 32 0 160 0 0-32-160 0 0-96-32 0zM480 128l0-32-32 0L288 96l0 32 160 0 0 96 32 0 0-96zm-64 64l0-32-32 0-96 0 0 32 96 0 0 32 32 0 0-32zM256 320l0-32-32 0 0 32 0 32 32 0 96 0 0-32-96 0z" />
    </Icon>
);

export default SendBack;