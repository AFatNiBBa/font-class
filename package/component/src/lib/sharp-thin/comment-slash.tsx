
import { Icon } from "../../index";

/**
 * A component that renders the `comment-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=sharp-thin comment-slash}
 * @preview ![comment-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/comment-slash.svg)
 */
const CommentSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM409.4 418.3C382 427.1 351.8 432 320 432c-30 0-58.6-4.4-85-12.4l-4.6-1.4-4.6 1.4L106.3 455.4l29.6-79 3.6-9.6-7.3-7.3C99.2 326.3 80 284.7 80 240c0-24.1 5.7-47.4 16.1-69L83.2 160.8C70.8 185.2 64 212 64 240c0 49.6 21.3 95.1 56.9 130.8L87.1 461.2 80 480l19.3-5.8 131.1-39.3c27.9 8.5 58.1 13.1 89.6 13.1c37.1 0 72.4-6.4 104.2-18l-14.9-11.7zM320 32c-47.7 0-92.4 10.6-130.7 29.1l14 11C237.6 56.8 277.2 48 320 48c135.8 0 240 88.9 240 192c0 32.5-10.4 63.6-28.8 91l12.7 10c20.5-29.9 32.1-64.3 32.1-101C576 125.1 461.4 32 320 32z" />
    </Icon>
);

export default CommentSlash;