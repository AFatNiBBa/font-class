
import { Icon } from "../../index";

/**
 * A component that renders the `bucket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=sharp-light bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M82.2 0L96 0 352 0l13.8 0 2 13.6 22 146.4-32.4 0L338.2 32 109.8 32 90.6 160l-32.4 0 22-146.4L82.2 0zM0 192l24 0 32.2 0 335.5 0 32.2 0 24 0 0 32-28 0L384 512 64 512 28 224 0 224l0-32zm60.2 32l32 256 263.5 0 32-256L60.2 224z" />
    </Icon>
);

export default Bucket;