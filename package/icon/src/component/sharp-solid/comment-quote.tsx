
import { Icon } from "../../index";

/**
 * A component that renders the `comment-quote` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-quote?s=sharp-solid comment-quote}
 * @preview ![comment-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-quote.svg)
 */
const CommentQuote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM240 144l-112 0 0 112 64 0 0 32-24 0-24 0 0 48 24 0 48 0 24 0 0-24 0-56 0-48 0-24 0-40zm144 0l-112 0 0 112 64 0 0 32-24 0-24 0 0 48 24 0 48 0 24 0 0-24 0-56 0-48 0-24 0-40z" />
    </Icon>
);

export default CommentQuote;