
import { Icon } from "../../index";

/**
 * A component that renders the `receipt` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=thin receipt}
 * @preview ![receipt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/receipt.svg)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M13.3 2C10.9-.1 7.6-.6 4.7 .7S0 4.9 0 8L0 504c0 3.1 1.8 6 4.7 7.3s6.2 .8 8.6-1.3L71.6 459l50.7 50.7c3 3 7.8 3.1 10.9 .4L192 458.6 250.7 510c3.2 2.8 7.9 2.6 10.9-.4L312.4 459 370.7 510c2.4 2.1 5.7 2.6 8.6 1.3s4.7-4.1 4.7-7.3L384 8c0-3.1-1.8-6-4.7-7.3s-6.2-.8-8.6 1.3L312.4 53.1 261.7 2.3c-3-3-7.8-3.1-10.9-.4L192.4 53.1 141.7 2.3c-3-3-7.8-3.1-10.9-.4L72 53.4 13.3 2zM16 486.4L16 25.6 66.7 70c3 2.6 7.5 2.6 10.5 0l58.4-51.1 50.7 50.7c3 3 7.8 3.1 10.9 .4l58.4-51.1 50.7 50.7c3 3 7.8 3.1 10.9 .4L368 25.6l0 460.7L317.3 442c-3.2-2.8-7.9-2.6-10.9 .4L255.6 493 197.3 442c-3-2.6-7.5-2.6-10.5 0L128.4 493 77.7 442.3c-3-3-7.8-3.1-10.9-.4L16 486.4zM96 152c-4.4 0-8 3.6-8 8s3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L96 152zM88 352c0 4.4 3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L96 344c-4.4 0-8 3.6-8 8zm8-104c-4.4 0-8 3.6-8 8s3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L96 248z" />
    </Icon>
);

export default Receipt;