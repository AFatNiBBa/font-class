
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-quote` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-quote?s=sharp-duotone-solid comment-quote}
 * @preview ![comment-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comment-quote.svg)
 */
const CommentQuote: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm128-96l112 0 0 40 0 24 0 48 0 56 0 24-24 0-48 0-24 0 0-48 24 0 24 0 0-32-64 0 0-112zm144 0l112 0 0 40 0 24 0 48 0 56 0 24-24 0-48 0-24 0 0-48 24 0 24 0 0-32-64 0 0-112z" />
        <path d="M128 144l112 0 0 40 0 24 0 48 0 56 0 24-24 0-48 0-24 0 0-48 24 0 24 0 0-32-64 0 0-112zm144 0l112 0 0 40 0 24 0 48 0 56 0 24-24 0-48 0-24 0 0-48 24 0 24 0 0-32-64 0 0-112z" />
    </Icon>
);

export default CommentQuote;