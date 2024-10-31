
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-text` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-text?s=sharp-duotone-solid comment-text}
 * @preview ![comment-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-text.svg)
 */
const CommentText: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160-80l24 0 72 0 72 0 24 0 0 48-24 0-48 0 0 104 0 24-48 0 0-24 0-104-48 0-24 0 0-48z" />
        <path d="M160 160l24 0 72 0 72 0 24 0 0 48-24 0-48 0 0 104 0 24-48 0 0-24 0-104-48 0-24 0 0-48z" />
    </Icon>
);

export default CommentText;