
import { Icon } from "../../index";

/**
 * A component that renders the `comment-middle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=regular comment-middle}
 * @preview ![comment-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/comment-middle.svg)
 */
const CommentMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M231.3 387.2L256 436.7l24.7-49.5c6.5-12.9 18.4-22.3 32.5-25.4C407 341 464 274.7 464 208c0-79.5-83.3-160-208-160S48 128.5 48 208c0 66.7 57 133 150.7 153.8c14.1 3.1 26.1 12.5 32.5 25.4zm92.4 21.5l-44.5 89c-4.4 8.8-13.3 14.3-23.2 14.3s-18.8-5.5-23.2-14.3l-44.5-89C79.8 384.5 0 303.8 0 208C0 93.1 114.6 0 256 0S512 93.1 512 208c0 95.8-79.8 176.5-188.3 200.7z" />
    </Icon>
);

export default CommentMiddle;