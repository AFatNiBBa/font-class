
import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=light messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M202.7 288L352 288c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 192c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 16 55.5-41.6c5.5-4.2 12.3-6.4 19.2-6.4zM352 320l-149.3 0-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-16 0-32-32 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64zM320 448c-35.3 0-64-28.7-64-64l0-32 32 0 0 32c0 17.7 14.3 32 32 32l117.3 0c6.9 0 13.7 2.2 19.2 6.4L512 464l0-16c0-17.7 14.3-32 32-32l32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-128 0 0-32 128 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-32 0 0 32 0 16c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L437.3 448 320 448z" />
    </Icon>
);

export default Messages;