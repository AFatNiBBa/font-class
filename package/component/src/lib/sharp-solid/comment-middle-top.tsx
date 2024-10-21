
import { Icon } from "../../index";

/**
 * A component that renders the `comment-middle-top` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle-top?s=sharp-solid comment-middle-top}
 * @preview ![comment-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-middle-top.svg)
 */
const CommentMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320.1 102.6C430.5 125.7 512 207.1 512 304c0 114.9-114.6 208-256 208S0 418.9 0 304c0-96.9 81.5-178.3 191.9-201.4L256 0l64.1 102.6z" />
    </Icon>
);

export default CommentMiddleTop;