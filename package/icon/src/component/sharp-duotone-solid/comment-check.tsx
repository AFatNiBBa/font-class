
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-check?s=sharp-duotone-solid comment-check}
 * @preview ![comment-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-check.svg)
 */
const CommentCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm126.1 0L160 206.1l1 1 16 16c15.7 15.7 31.4 31.4 47 47c37-37 74-74 111-111c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L385.9 176c-.3 .3-.6 .6-1 1c-5.3 5.3-10.7 10.7-16 16c-42.7 42.7-85.3 85.3-128 128l-17 17-17-17-64-64c-5.3-5.3-10.7-10.7-16-16l-1-1z" />
        <path d="M385 177L241 321l-17 17-17-17-80-80L161 207l63 63L351 143 385 177z" />
    </Icon>
);

export default CommentCheck;