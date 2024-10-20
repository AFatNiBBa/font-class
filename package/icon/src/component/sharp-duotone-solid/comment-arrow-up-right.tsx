
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up-right?s=sharp-duotone-solid comment-arrow-up-right}
 * @preview ![comment-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-arrow-up-right.svg)
 */
const CommentArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm150.1 72c5.7-5.7 11.3-11.3 17-17c29-29 58-58 87-87L200 208l-24 0c0-16 0-32 0-48l24 0 112 0 24 0 0 24 0 112 0 24-48 0c0-8 0-16 0-24c0-18 0-36 0-54.1c-29 29-58 58-87 87c-5.7 5.7-11.3 11.3-17 17L150.1 312z" />
        <path d="M176 160l24 0 112 0 24 0 0 24 0 112 0 24-48 0 0-24 0-54.1-87 87-17 17L150.1 312l17-17 87-87L200 208l-24 0 0-48z" />
    </Icon>
);

export default CommentArrowUpRight;