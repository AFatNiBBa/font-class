
import { Icon } from "../../index";

/**
 * A component that renders the `comment-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-pen?s=sharp-solid comment-pen}
 * @preview ![comment-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-pen.svg)
 */
const CommentPen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM304.8 144l-29.1 29.1L323 220.4l29.1-29.1L304.8 144zm-51.7 51.7l-85.2 85.2L160 336.1l55.3-7.9L300.4 243l-47.3-47.3z" />
    </Icon>
);

export default CommentPen;