
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-xmark?s=sharp-duotone-solid comment-xmark}
 * @preview ![comment-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-xmark.svg)
 */
const CommentXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm158.1-64L192 142.1l17 17 47 47 47-47 17-17L353.9 176l-17 17-47 47 47 47 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.4-47-47c-15.7 15.7-31.3 31.3-47 47c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9l17-17 47-47c-15.7-15.7-31.3-31.3-47-47c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M337 193l17-17L320 142.1l-17 17-47 47-47-47-17-17L158.1 176l17 17 47 47-47 47-17 17L192 337.9l17-17 47-47 47 47 17 17L353.9 304l-17-17-47-47 47-47z" />
    </Icon>
);

export default CommentXmark;