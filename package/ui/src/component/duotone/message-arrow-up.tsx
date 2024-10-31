
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=duotone message-arrow-up}
 * @preview ![message-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-arrow-up.svg)
 */
const MessageArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM160 192c0 6.1 2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l31-31L232 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-118.1 31 31c9.4 9.4 24.6 9.4 33.9 0c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17l-72-72c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7l-72 72c-4.7 4.7-7 10.8-7 17z" />
        <path d="M256 320c13.3 0 24-10.7 24-24l0-118.1 31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31L232 296c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default MessageArrowUp;