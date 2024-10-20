
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bucket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=duotone bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 152l0 40 48 0 0-40C96 94.6 142.6 48 200 48l48 0c57.4 0 104 46.6 104 104l0 40 48 0 0-40C400 68.1 331.9 0 248 0L200 0C116.1 0 48 68.1 48 152z" />
        <path d="M32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32l5.1 0L59.5 469c2.6 24.4 23.2 43 47.7 43l233.6 0c24.6 0 45.2-18.5 47.7-43l22.4-213 5.1 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 192z" />
    </Icon>
);

export default Bucket;