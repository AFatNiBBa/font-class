
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bucket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=sharp-duotone-solid bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M45.2 192l48.6 0L116.5 48l215 0 22.7 144 48.6 0L375.7 20.3 372.5 0 352 0 96 0 75.5 0 72.3 20.3 45.2 192z" />
        <path d="M448 192L0 192l0 64 37.1 0L64 512l320 0 26.9-256 37.1 0 0-64z" />
    </Icon>
);

export default Bucket;