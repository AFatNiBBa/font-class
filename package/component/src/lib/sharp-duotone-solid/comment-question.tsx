
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-question?s=sharp-duotone-solid comment-question}
 * @preview ![comment-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-question.svg)
 */
const CommentQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm168-72c0-30.9 25.1-56 56-56l56.9 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8c-10.8 6.2-21.5 12.3-32.3 18.5c0 2.5 0 5 0 7.6c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-7.2 0-14.3 0-21.5c0-4.6 0-9.3 0-13.9l12.1-6.9c14.8-8.5 29.6-17 44.3-25.4c2.4-1.4 4.3-3.3 5.6-5.5c.7-1.1 1.2-2.4 1.5-3.6c.2-.6 .3-1.3 .4-2c0-.3 .1-.7 .1-1s0-.6 0-1.1c0-.5 0-1-.1-1.5s-.1-1-.2-1.5c-.2-1-.5-1.9-.9-2.8c-.8-1.8-1.9-3.4-3.2-4.8c-2.7-2.7-6.5-4.4-10.7-4.4L224 160c-4.4 0-8 3.6-8 8c0 2.2 0 4.4 0 6.5l-48 0c0-2.2 0-4.4 0-6.5zm64 152l48 0c0 16 0 32 0 48l-48 0c0-16 0-32 0-48z" />
        <path d="M224 112c-30.9 0-56 25.1-56 56l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L232 220.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L224 112zm56 208l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default CommentQuestion;