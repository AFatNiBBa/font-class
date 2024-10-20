
import { Icon } from "../../index";

/**
 * A component that renders the `retweet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=sharp-thin retweet}
 * @preview ![retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/retweet.svg)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 176l160 0 0-9.4-80-80-80 80 0 9.4zM0 160L84.7 75.3 96 64l11.3 11.3L192 160l0 16 0 16-16 0-72 0 0 208 208 0 8 0 0 16-8 0L96 416l-8 0 0-8 0-216-72 0L0 192l0-16 0-16zM400 336l0 9.4 80 80 80-80 0-9.4-160 0zm-16 16l0-16 0-16 16 0 72 0 0-208-208 0-8 0 0-16 8 0 216 0 8 0 0 8 0 216 72 0 16 0 0 16 0 16-84.7 84.7L480 448l-11.3-11.3L384 352z" />
    </Icon>
);

export default Retweet;