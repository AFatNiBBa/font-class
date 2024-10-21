
import { Icon } from "../../index";

/**
 * A component that renders the `bucket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=sharp-regular bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M75.5 0L96 0 352 0l20.5 0 3.2 20.3L397.8 160l-48.6 0L331.5 48l-215 0L98.8 160l-48.6 0L72.3 20.3 75.5 0zM0 192l32 0 48.2 0 287.5 0 48.2 0 32 0 0 48-36.8 0L384 512 64 512 36.8 240 0 240l0-48zm85 48l22.4 224 233.1 0L363 240 85 240z" />
    </Icon>
);

export default Bucket;