
import { Icon } from "../../index";

/**
 * A component that renders the `bucket` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=light bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 144c0 8.8-7.2 16-16 16s-16-7.2-16-16C64 64.5 128.5 0 208 0l32 0c79.5 0 144 64.5 144 144c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.1-112-112-112l-32 0C146.1 32 96 82.1 96 144zM0 208c0-8.8 7.2-16 16-16l8 0 32.2 0 335.5 0 32.2 0 8 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-12 0L389.3 470c-3 24-23.4 42-47.6 42l-235.3 0c-24.2 0-44.6-18-47.6-42L28 224l-12 0c-8.8 0-16-7.2-16-16zm60.2 16L90.5 466c1 8 7.8 14 15.9 14l235.3 0c8.1 0 14.9-6 15.9-14l30.2-242L60.2 224z" />
    </Icon>
);

export default Bucket;