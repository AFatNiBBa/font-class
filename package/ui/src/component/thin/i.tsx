
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=thin i}
 * @preview ![i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/i.svg)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0 0 416L8 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-144 0 0-416 144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L160 32 8 32z" />
    </Icon>
);

export default I;