
import { Icon } from "../../index";

/**
 * A component that renders the `comment-code` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-code?s=sharp-solid comment-code}
 * @preview ![comment-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-code.svg)
 */
const CommentCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM217 193l17-17L200 142.1l-17 17-64 64-17 17 17 17 64 64 17 17L233.9 304l-17-17-47-47 47-47zM329 159l-17-17L278.1 176l17 17 47 47-47 47-17 17L312 337.9l17-17 64-64 17-17-17-17-64-64z" />
    </Icon>
);

export default CommentCode;