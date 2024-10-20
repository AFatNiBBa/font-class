
import { Icon } from "../../index";

/**
 * A component that renders the `comment-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-xmark?s=sharp-solid comment-xmark}
 * @preview ![comment-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-xmark.svg)
 */
const CommentXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM353.9 176L320 142.1l-17 17-47 47-47-47-17-17L158.1 176l17 17 47 47-47 47-17 17L192 337.9l17-17 47-47 47 47 17 17L353.9 304l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default CommentXmark;