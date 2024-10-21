
import { Icon } from "../../index";

/**
 * A component that renders the `messages-question` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages-question?s=solid messages-question}
 * @preview ![messages-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/messages-question.svg)
 */
const MessagesQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-149.3 0-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-48-32 0c-35.3 0-64-28.7-64-64L0 64zM256 352l96 0c53 0 96-43 96-96l0-128 128 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-32 0 0 48c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L437.3 448 320 448c-35.3 0-64-28.7-64-64l0-32zM136.2 92.4l-.4 1c-3.7 10.4 1.8 21.8 12.2 25.5s21.8-1.8 25.5-12.2l.4-1c.9-2.7 3.5-4.4 6.3-4.4l48.5 0c7 0 12.6 5.7 12.6 12.6c0 4.5-2.4 8.7-6.3 10.9L198 146.1c-6.2 3.6-10 10.2-10 17.3l0 11.2c0 11 9 20 20 20c10.9 0 19.8-8.8 20-19.6l26.9-15.4c16.3-9.4 26.4-26.8 26.4-45.6c0-29.1-23.6-52.6-52.6-52.6l-48.5 0c-19.8 0-37.4 12.4-44 31.1zM234.7 248a26.7 26.7 0 1 0 -53.3 0 26.7 26.7 0 1 0 53.3 0z" />
    </Icon>
);

export default MessagesQuestion;