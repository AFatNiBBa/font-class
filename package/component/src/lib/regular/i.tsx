
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=regular i}
 * @preview ![i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/i.svg)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l112 0 0 352L24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0 0-352 112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L160 32 24 32z" />
    </Icon>
);

export default I;