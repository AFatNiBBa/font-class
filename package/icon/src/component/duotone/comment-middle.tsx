
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-middle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=duotone comment-middle}
 * @preview ![comment-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-middle.svg)
 */
const CommentMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M188.3 408.7l44.5 89c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3l44.5-89C432.2 384.5 512 303.8 512 208C512 93.1 397.4 0 256 0S0 93.1 0 208c0 95.8 79.8 176.5 188.3 200.7z" />
    </Icon>
);

export default CommentMiddle;