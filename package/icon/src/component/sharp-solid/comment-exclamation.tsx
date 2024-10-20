
import { Icon } from "../../index";

/**
 * A component that renders the `comment-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-exclamation?s=sharp-solid comment-exclamation}
 * @preview ![comment-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-exclamation.svg)
 */
const CommentExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM280 112l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 352l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default CommentExclamation;