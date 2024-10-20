
import { Icon, generic } from "../../index";

/**
 * A component that renders the `retweet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=duotone retweet}
 * @preview ![retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/retweet.svg)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M272 128c0-17.7 14.3-32 32-32l112 0c53 0 96 43 96 96l0 128 32 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l32 0 0-128c0-17.7-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32z" />
        <path d="M304 384c0 17.7-14.3 32-32 32l-112 0c-53 0-96-43-96-96l0-128-32 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l64-64c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-32 0 0 128c0 17.7 14.3 32 32 32l112 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default Retweet;