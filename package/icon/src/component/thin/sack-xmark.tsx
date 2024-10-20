
import { Icon } from "../../index";

/**
 * A component that renders the `sack-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack-xmark?s=thin sack-xmark}
 * @preview ![sack-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sack-xmark.svg)
 */
const SackXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M315.2 128l-118.3 0-9.2 5.9C131.8 169.6 16 259.6 16 416c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80c0-156.4-115.8-246.4-171.6-282.1l-9.2-5.9zm4.6-16.7l57.1-82.8c3.7-5.3-.1-12.5-6.6-12.5L141.7 16c-6.4 0-10.2 7.2-6.6 12.5l57.1 82.8 .5 .7 126.7 0 .5-.7zM0 416C0 262.9 105.1 170.8 165.7 129.2c4.7-3.3 9.2-6.2 13.3-8.8l-9.1-13.2-48-69.6C111 21.7 122.4 0 141.7 0L370.3 0c19.3 0 30.7 21.7 19.8 37.6l-48 69.6L333 120.4c4.1 2.6 8.6 5.6 13.3 8.8C406.9 170.8 512 262.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96zM256 308.7l58.3-58.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L267.3 320l58.3 58.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L256 331.3l-58.3 58.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L244.7 320l-58.3-58.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L256 308.7z" />
    </Icon>
);

export default SackXmark;