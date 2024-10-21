
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-retweet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-retweet?s=sharp-duotone-solid arrows-retweet}
 * @preview ![arrows-retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-retweet.svg)
 */
const ArrowsRetweet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M304 96l32 0 176 0 32 0 0 32 0 210.7 25.4-25.4L592 290.7 637.3 336l-22.6 22.6-80 80L512 461.3l-22.6-22.6-80-80L386.7 336 432 290.7l22.6 22.6L480 338.7 480 160l-144 0-32 0 0-64z" />
        <path d="M128 50.7l22.6 22.6 80 80L253.3 176 208 221.3l-22.6-22.6L160 173.3 160 352l144 0 32 0 0 64-32 0-176 0-32 0 0-32 0-210.7L70.6 198.6 48 221.3 2.7 176l22.6-22.6 80-80L128 50.7z" />
    </Icon>
);

export default ArrowsRetweet;