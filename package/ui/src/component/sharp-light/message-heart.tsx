
import { Icon } from "../../index";

/**
 * A component that renders the `message-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-heart?s=sharp-light message-heart}
 * @preview ![message-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-heart.svg)
 */
const MessageHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 448l0-32-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5zm0-64l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zm96-203l-22.2-21.3-7.7-7.4c-5.5-5.3-12.9-8.3-20.5-8.3l-2.4 0c-15 0-27.2 12.2-27.2 27.2c0 7.4 3 14.5 8.3 19.6L256 259.7l71.7-68.9c5.3-5.1 8.3-12.2 8.3-19.6c0-15-12.2-27.2-27.2-27.2l-2.4 0c-7.7 0-15 3-20.5 8.3l-7.7 7.4L256 181zM244.9 293.5l-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L256 304.1l-11.1-10.7z" />
    </Icon>
);

export default MessageHeart;