
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-middle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=sharp-duotone-solid comment-middle}
 * @preview ![comment-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-middle.svg)
 */
const CommentMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320.1 409.4C430.5 386.3 512 304.9 512 208C512 93.1 397.4 0 256 0S0 93.1 0 208c0 96.9 81.5 178.3 191.9 201.4L256 512l64.1-102.6z" />
    </Icon>
);

export default CommentMiddle;