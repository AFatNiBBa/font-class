
import { Icon } from "../../index";

/**
 * A component that renders the `comment-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-heart?s=sharp-light comment-heart}
 * @preview ![comment-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comment-heart.svg)
 */
const CommentHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.9 382l7.2-19.3L79.6 348.2C49.1 317.6 32 279.9 32 240c0-91.3 93.8-176 224-176s224 84.7 224 176s-93.8 176-224 176c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8L68.6 430.8 86.9 382zM16 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L30.1 442.4 16 480zM256 229l22.2-21.3 7.7-7.4c5.5-5.3 12.9-8.3 20.5-8.3l2.4 0c15 0 27.2 12.2 27.2 27.2c0 7.4-3 14.5-8.3 19.6L256 307.7l-71.7-68.9c-5.3-5.1-8.3-12.2-8.3-19.6c0-15 12.2-27.2 27.2-27.2l2.4 0c7.7 0 15 3 20.5 8.3l7.7 7.4L256 229zM244.9 341.5L256 352.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6z" />
    </Icon>
);

export default CommentHeart;