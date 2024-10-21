
import { Icon } from "../../index";

/**
 * A component that renders the `comment-text` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-text?s=sharp-solid comment-text}
 * @preview ![comment-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-text.svg)
 */
const CommentText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM184 160l-24 0 0 48 24 0 48 0 0 104 0 24 48 0 0-24 0-104 48 0 24 0 0-48-24 0-72 0-72 0z" />
    </Icon>
);

export default CommentText;