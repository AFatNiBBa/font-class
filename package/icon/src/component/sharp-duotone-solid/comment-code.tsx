
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-code?s=sharp-duotone-solid comment-code}
 * @preview ![comment-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-code.svg)
 */
const CommentCode: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm102.1 0l17-17 64-64 17-17L233.9 176l-17 17-47 47 47 47 17 17L200 337.9l-17-17-64-64-17-17zm176-64L312 142.1l17 17 64 64 17 17-17 17-64 64-17 17L278.1 304l17-17 47-47-47-47-17-17z" />
        <path d="M233.9 176l-17 17-47 47 47 47 17 17L200 337.9l-17-17-64-64-17-17 17-17 64-64 17-17L233.9 176zM312 142.1l17 17 64 64 17 17-17 17-64 64-17 17L278.1 304l17-17 47-47-47-47-17-17L312 142.1z" />
    </Icon>
);

export default CommentCode;