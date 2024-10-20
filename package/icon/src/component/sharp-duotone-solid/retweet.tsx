
import { Icon, generic } from "../../index";

/**
 * A component that renders the `retweet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=sharp-duotone-solid retweet}
 * @preview ![retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/retweet.svg)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M272 96l0 64 32 0 144 0 0 160-64 0 0 32 96 96 96-96 0-32-64 0 0-192 0-32-32 0L304 96l-32 0z" />
        <path d="M96 64L0 160l0 32 64 0 0 192 0 32 32 0 176 0 32 0 0-64-32 0-144 0 0-160 64 0 0-32L96 64z" />
    </Icon>
);

export default Retweet;