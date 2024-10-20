
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=sharp-duotone-solid comment-slash}
 * @preview ![comment-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-slash.svg)
 */
const CommentSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 240c0-27.8 6.7-54.4 18.9-78.7L424.1 430.1C392.3 441.6 357 448 320 448c-31.5 0-61.7-4.6-89.6-13.1L80 480l40.9-109.2C85.3 335.1 64 289.6 64 240zM144 89c45.9-35.3 107.9-57 176-57c141.4 0 256 93.1 256 208c0 52-23.5 99.6-62.3 136C390.4 280.4 267.2 184.7 144 89z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CommentSlash;