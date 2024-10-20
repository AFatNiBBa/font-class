
import { Icon } from "../../index";

/**
 * A component that renders the `message-music` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-music?s=sharp-regular message-music}
 * @preview ![message-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/message-music.svg)
 */
const MessageMusic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 512l48-32 96-64 160 0 48 0 0-48 0-320 0-48L464 0 48 0 0 0 0 48 0 368l0 48 48 0 64 0 48 0 0 38.3 0 9.7 0 48zM277.4 376.1L208 422.3l0-6.3 0-48-48 0L48 368 48 48l416 0 0 320-160 0-14.5 0-12.1 8.1zM352 96l0-23.1L330.4 81l-128 48L192 132.9l0 11.1 0 32 0 81.8c-5-1.2-10.4-1.8-16-1.8c-26.5 0-48 14.3-48 32s21.5 32 48 32s48-14.3 48-32l0-100.9 96-36 0 74.7c-5-1.2-10.4-1.8-16-1.8c-26.5 0-48 14.3-48 32s21.5 32 48 32s48-14.3 48-32l0-128 0-32z" />
    </Icon>
);

export default MessageMusic;