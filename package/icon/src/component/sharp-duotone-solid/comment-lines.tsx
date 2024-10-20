
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-lines?s=sharp-duotone-solid comment-lines}
 * @preview ![comment-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-lines.svg)
 */
const CommentLines: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm128-64l24 0 208 0 24 0 0 48-24 0-208 0-24 0 0-48zm0 96l24 0 112 0 24 0 0 48-24 0-112 0-24 0 0-48z" />
        <path d="M128 176l24 0 208 0 24 0 0 48-24 0-208 0-24 0 0-48zm0 96l24 0 112 0 24 0 0 48-24 0-112 0-24 0 0-48z" />
    </Icon>
);

export default CommentLines;