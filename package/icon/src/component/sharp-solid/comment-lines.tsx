
import { Icon } from "../../index";

/**
 * A component that renders the `comment-lines` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-lines?s=sharp-solid comment-lines}
 * @preview ![comment-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-lines.svg)
 */
const CommentLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM152 176l-24 0 0 48 24 0 208 0 24 0 0-48-24 0-208 0zm0 96l-24 0 0 48 24 0 112 0 24 0 0-48-24 0-112 0z" />
    </Icon>
);

export default CommentLines;