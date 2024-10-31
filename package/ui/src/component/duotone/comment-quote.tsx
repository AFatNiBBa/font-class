
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-quote` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-quote?s=duotone comment-quote}
 * @preview ![comment-quote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-quote.svg)
 */
const CommentQuote: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3C1.6 455.8 0 459.9 0 464c0 2.1 .4 4.1 1.2 6.1c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm128-64c0-17.7 14.3-32 32-32l48 0c17.7 0 32 14.3 32 32l0 24 0 24 0 39.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-1.3 .2-2.7 .3-4 .3c-11.5 0-21.7-8.3-23.6-20.1c-2.2-13.1 6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7l0-7.3-32 0c-17.7 0-32-14.3-32-32l0-48zm144 0c0-17.7 14.3-32 32-32l48 0c17.7 0 32 14.3 32 32l0 24 0 24 0 39.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-1.3 .2-2.7 .3-4 .3c-11.5 0-21.7-8.3-23.6-20.1c-2.2-13.1 6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7l0-7.3-32 0c-17.7 0-32-14.3-32-32l0-48z" />
        <path d="M128 176c0-17.7 14.3-32 32-32l48 0c17.7 0 32 14.3 32 32l0 24 0 24 0 39.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7l0-7.3-32 0c-17.7 0-32-14.3-32-32l0-48zm256 87.3c0 35.2-25.4 65.2-60.2 71l-7.9 1.3c-13.1 2.2-25.4-6.7-27.6-19.7s6.7-25.4 19.7-27.6l7.9-1.3c11.6-1.9 20.1-11.9 20.1-23.7l0-7.3-32 0c-17.7 0-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32l48 0c17.7 0 32 14.3 32 32l0 24 0 24 0 39.3z" />
    </Icon>
);

export default CommentQuote;