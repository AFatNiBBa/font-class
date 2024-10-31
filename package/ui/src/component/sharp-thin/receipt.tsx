
import { Icon } from "../../index";

/**
 * A component that renders the `receipt` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=sharp-thin receipt}
 * @preview ![receipt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/receipt.svg)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M81.3 459l-8.2-5.9L64.2 458 16 484.8 16 27.2 64.2 54l8.8 4.9L81.3 53l47.3-33.8 54.9 34.3 8.5 5.3 8.5-5.3 54.9-34.3L302.7 53l8.2 5.9 8.8-4.9L368 27.2l0 457.6L319.8 458l-8.8-4.9-8.2 5.9-47.3 33.8-54.9-34.3-8.5-5.3-8.5 5.3-54.9 34.3L81.3 459zM0 512l16-8.9L72 472l56 40 64-40 64 40 56-40 56 31.1 16 8.9 0-18.3 0-475.4L384 0 368 8.9 312 40 256 0 192 40 128 0 72 40 16 8.9 0 0 0 18.3 0 493.7 0 512zM96 152l-8 0 0 16 8 0 192 0 8 0 0-16-8 0L96 152zM88 344l0 16 8 0 192 0 8 0 0-16-8 0L96 344l-8 0zm8-96l-8 0 0 16 8 0 192 0 8 0 0-16-8 0L96 248z" />
    </Icon>
);

export default Receipt;