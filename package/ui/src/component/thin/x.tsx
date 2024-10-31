
import { Icon } from "../../index";

/**
 * A component that renders the `x` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x?s=thin x}
 * @preview ![x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/x.svg)
 */
const X: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M382.1 45.2c2.9-3.4 2.5-8.4-.9-11.3s-8.4-2.5-11.3 .9L192 243.7 14.1 34.8c-2.9-3.4-7.9-3.8-11.3-.9S-1 41.8 1.9 45.2L181.5 256 1.9 466.8c-2.9 3.4-2.5 8.4 .9 11.3s8.4 2.5 11.3-.9L192 268.3 369.9 477.2c2.9 3.4 7.9 3.8 11.3 .9s3.8-7.9 .9-11.3L202.5 256 382.1 45.2z" />
    </Icon>
);

export default X;