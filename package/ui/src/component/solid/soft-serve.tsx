
import { Icon } from "../../index";

/**
 * A component that renders the `soft-serve` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soft-serve?s=solid soft-serve}
 * @preview ![soft-serve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/soft-serve.svg)
 */
const SoftServe: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l6.1 6.1c3.4 3.4 5.3 7.9 5.3 12.7C208 56 200 64 190.1 64L128 64c-35.3 0-64 28.7-64 64c0 11.8 3.2 22.9 8.8 32.4C40.8 164 16 191.1 16 224c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-2.3 0c11.5-14.4 18.3-32.7 18.3-52.6C320 48.1 271.9 0 212.6 0L208 0zM48 320l0 32c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l134.7 0c16.3 0 30-12.3 31.8-28.5L302.2 384l1.8 0c17.7 0 32-14.3 32-32l0-32L48 320z" />
    </Icon>
);

export default SoftServe;