
import { Icon } from "../../index";

/**
 * A component that renders the `comment` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment?s=sharp-light comment}
 * @preview ![comment](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comment.svg)
 */
const Comment: typeof Icon = x => (
    <Icon {...x}>
        <path d="M94.1 362.8L86.9 382 68.6 430.8l88.5-26.6 9.3-2.8 9.2 2.8c24.9 7.6 51.9 11.7 80.3 11.7c130.2 0 224-84.7 224-176s-93.8-176-224-176S32 148.7 32 240c0 39.9 17.1 77.6 47.6 108.2l14.5 14.6zM54.5 468.4L16 480l14.1-37.6 26.8-71.5C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L54.5 468.4z" />
    </Icon>
);

export default Comment;