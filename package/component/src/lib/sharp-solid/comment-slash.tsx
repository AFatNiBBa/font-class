
import { Icon } from "../../index";

/**
 * A component that renders the `comment-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=sharp-solid comment-slash}
 * @preview ![comment-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-slash.svg)
 */
const CommentSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L513.7 376c38.8-36.5 62.3-84 62.3-136C576 125.1 461.4 32 320 32c-68.2 0-130.2 21.7-176 57L48.4 14.8zM424.1 430.1L82.9 161.3C70.7 185.6 64 212.2 64 240c0 49.6 21.3 95.1 56.9 130.8L80 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c37 0 72.3-6.4 104.1-17.9z" />
    </Icon>
);

export default CommentSlash;