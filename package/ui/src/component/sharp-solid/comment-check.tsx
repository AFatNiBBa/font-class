
import { Icon } from "../../index";

/**
 * A component that renders the `comment-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-check?s=sharp-solid comment-check}
 * @preview ![comment-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-check.svg)
 */
const CommentCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM369 193l17-17L352 142.1l-17 17-111 111-47-47-17-17L126.1 240l17 17 64 64 17 17 17-17L369 193z" />
    </Icon>
);

export default CommentCheck;