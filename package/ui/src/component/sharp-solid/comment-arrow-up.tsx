
import { Icon } from "../../index";

/**
 * A component that renders the `comment-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up?s=sharp-solid comment-arrow-up}
 * @preview ![comment-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-arrow-up.svg)
 */
const CommentArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM280 328l0-118.1 31 31 17 17L361.9 224l-17-17-72-72-17-17-17 17-72 72-17 17L184 257.9l17-17 31-31L232 328l0 24 48 0 0-24z" />
    </Icon>
);

export default CommentArrowUp;