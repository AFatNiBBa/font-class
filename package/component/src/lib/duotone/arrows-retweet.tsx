
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-retweet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-retweet?s=duotone arrows-retweet}
 * @preview ![arrows-retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-retweet.svg)
 */
const ArrowsRetweet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M304 128c0-17.7 14.3-32 32-32l112 0c53 0 96 43 96 96l0 146.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0c6.2 6.2 9.4 14.4 9.4 22.6s-3.1 16.4-9.4 22.6l-96 96c-6.2 6.2-14.4 9.4-22.6 9.4s-16.4-3.1-22.6-9.4l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L480 338.7 480 192c0-17.7-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32z" />
        <path d="M105.4 73.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L160 173.3 160 320c0 17.7 14.3 32 32 32l112 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-112 0c-53 0-96-43-96-96l0-146.7L54.6 214.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z" />
    </Icon>
);

export default ArrowsRetweet;