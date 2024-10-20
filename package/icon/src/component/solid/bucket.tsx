
import { Icon } from "../../index";

/**
 * A component that renders the `bucket` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=solid bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 152l0 8-48 0 0-8C48 68.1 116.1 0 200 0l48 0c83.9 0 152 68.1 152 152l0 8-48 0 0-8c0-57.4-46.6-104-104-104l-48 0C142.6 48 96 94.6 96 152zM0 224c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-5.1 0L388.5 469c-2.6 24.4-23.2 43-47.7 43l-233.6 0c-24.6 0-45.2-18.5-47.7-43L37.1 256 32 256c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Bucket;