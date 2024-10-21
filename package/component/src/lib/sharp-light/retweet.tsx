
import { Icon } from "../../index";

/**
 * A component that renders the `retweet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=sharp-light retweet}
 * @preview ![retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/retweet.svg)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 192L0 192l0-32L73.4 86.6 96 64l22.6 22.6L192 160l0 32-32 0-48 0 0 192 192 0 16 0 0 32-16 0L96 416l-16 0 0-16 0-208-48 0zm114.7-32L96 109.3 45.3 160 80 160l32 0 34.7 0zM464 128l-192 0-16 0 0-32 16 0 208 0 16 0 0 16 0 208 48 0 32 0 0 32-73.4 73.4L480 448l-22.6-22.6L384 352l0-32 32 0 48 0 0-192zm16 274.7L530.7 352 496 352l-32 0-34.7 0L480 402.7z" />
    </Icon>
);

export default Retweet;