
import { Icon } from "../../index";

/**
 * A component that renders the `message-image` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-image?s=sharp-thin message-image}
 * @preview ![message-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-image.svg)
 */
const MessageImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 432l0-16-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8zm0-32l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zM88 128a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm168.4-28.8l6 8 120 160 1.6 2.1 0 2.7 0 16 0 8-8 0L96 320l-8 0 0-8 0-16 0-3.1 2.1-2.3 72-80 5.6-6.3 6 6 25.9 25.9 90.4-105.4 6.5-7.6zm-.8 25.6L206.1 253.2l-5.6 6.6-6.1-6.1-26-26L104 299.1l0 4.9 304 0 0-5.3L295.6 148.8z" />
    </Icon>
);

export default MessageImage;