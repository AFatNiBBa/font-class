
import { Icon } from "../../index";

/**
 * A component that renders the `comment-arrow-up-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up-right?s=sharp-light comment-arrow-up-right}
 * @preview ![comment-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comment-arrow-up-right.svg)
 */
const CommentArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.9 382l7.2-19.3L79.6 348.2C49.1 317.6 32 279.9 32 240c0-91.3 93.8-176 224-176s224 84.7 224 176s-93.8 176-224 176c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8L68.6 430.8 86.9 382zM16 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L30.1 442.4 16 480zM192 152l-16 0 0 32 16 0 89.4 0L172.7 292.7 161.4 304 184 326.6l11.3-11.3L304 206.6l0 89.4 0 16 32 0 0-16 0-128 0-16-16 0-128 0z" />
    </Icon>
);

export default CommentArrowUpRight;