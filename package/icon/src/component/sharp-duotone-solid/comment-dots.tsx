
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-dots` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-dots?s=sharp-duotone-solid comment-dots}
 * @preview ![comment-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-dots.svg)
 */
const CommentDots: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M96 240a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CommentDots;