
import { Icon } from "../../index";

/**
 * A component that renders the `comment-image` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-image?s=sharp-thin comment-image}
 * @preview ![comment-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/comment-image.svg)
 */
const CommentImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M71.9 376.4l3.6-9.6-7.3-7.3C35.2 326.3 16 284.7 16 240C16 136.9 120.2 48 256 48s240 88.9 240 192s-104.2 192-240 192c-30 0-58.6-4.4-85-12.4l-4.6-1.4-4.6 1.4L42.3 455.4l29.6-79zM16 480l19.3-5.8 131.1-39.3c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L23.1 461.2 16 480zM200 160a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-40-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm136.4 3.2l-6.5 7.6L199.5 252.2l-25.9-25.9-6-6-5.6 6.3-72 80L88 308.9l0 3.1 0 16 0 8 8 0 320 0 8 0 0-8 0-16 0-2.7-1.6-2.1-120-160-6-8zm-.8 25.6L408 314.7l0 5.3-304 0 0-4.9 64.3-71.5 26 26 6.1 6.1 5.6-6.6 89.5-104.4z" />
    </Icon>
);

export default CommentImage;