
import { Icon } from "../../index";

/**
 * A component that renders the `comment-arrow-up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up-right?s=sharp-solid comment-arrow-up-right}
 * @preview ![comment-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-arrow-up-right.svg)
 */
const CommentArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM200 160l-24 0 0 48 24 0 54.1 0-87 87-17 17L184 345.9l17-17 87-87 0 54.1 0 24 48 0 0-24 0-112 0-24-24 0-112 0z" />
    </Icon>
);

export default CommentArrowUpRight;