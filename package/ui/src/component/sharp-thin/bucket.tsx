
import { Icon } from "../../index";

/**
 * A component that renders the `bucket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=sharp-thin bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M89.4 0L96 0 352 0l6.6 0 1.2 6.5L389.1 160l-16.3 0L345.4 16 102.6 16 75.2 160l-16.3 0L88.1 6.5 89.4 0zM0 192l24 0 16.1 0 367.8 0 16.1 0 24 0 0 16-26 0L384 512 64 512 26 208 0 208l0-16zm42.1 16l36 288 291.8 0 36-288L42.1 208z" />
    </Icon>
);

export default Bucket;