
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up?s=sharp-duotone-solid comment-arrow-up}
 * @preview ![comment-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-arrow-up.svg)
 */
const CommentArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm150.1-16l17-17 72-72 17-17 17 17 72 72 17 17L328 257.9l-17-17-31-31L280 328l0 24-48 0 0-24 0-118.1-31 31-17 17L150.1 224z" />
        <path d="M280 352l0-24 0-118.1 31 31 17 17L361.9 224l-17-17-72-72-17-17-17 17-72 72-17 17L184 257.9l17-17 31-31L232 328l0 24 48 0z" />
    </Icon>
);

export default CommentArrowUp;