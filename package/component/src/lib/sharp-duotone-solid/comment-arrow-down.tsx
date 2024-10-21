
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-down?s=sharp-duotone-solid comment-arrow-down}
 * @preview ![comment-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-arrow-down.svg)
 */
const CommentArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm150.1 16L184 222.1l17 17 31 31L232 152l0-24 48 0 0 24 0 118.1 31-31 17-17L361.9 256l-17 17-72 72-17 17-17-17-72-72-17-17z" />
        <path d="M280 128l0 24 0 118.1 31-31 17-17L361.9 256l-17 17-72 72-17 17-17-17-72-72-17-17L184 222.1l17 17 31 31L232 152l0-24 48 0z" />
    </Icon>
);

export default CommentArrowDown;