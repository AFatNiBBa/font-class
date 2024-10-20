
import { Icon } from "../../index";

/**
 * A component that renders the `comment-middle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=sharp-regular comment-middle}
 * @preview ![comment-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/comment-middle.svg)
 */
const CommentMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M290.2 366.6L279.4 384 256 421.4 232.6 384l-10.8-17.3-20-4.2C106.3 342.4 48 275.4 48 208c0-79.5 83.3-160 208-160s208 80.5 208 160c0 67.4-58.3 134.4-153.7 154.4l-20 4.2zM227.7 466.7L256 512l28.3-45.3 35.8-57.3C430.5 386.3 512 304.9 512 208C512 93.1 397.4 0 256 0S0 93.1 0 208c0 96.9 81.5 178.3 191.9 201.4l35.8 57.3z" />
    </Icon>
);

export default CommentMiddle;