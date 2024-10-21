
import { Icon } from "../../index";

/**
 * A component that renders the `comment-image` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-image?s=sharp-solid comment-image}
 * @preview ![comment-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-image.svg)
 */
const CommentImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM192 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288l0 32 320 0 0-32L296 144 195.5 264.6 160 224 96 288z" />
    </Icon>
);

export default CommentImage;