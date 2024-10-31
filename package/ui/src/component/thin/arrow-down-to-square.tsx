
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-square` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-square?s=thin arrow-down-to-square}
 * @preview ![arrow-down-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-down-to-square.svg)
 */
const ArrowDownToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M373.7 221.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 308.7 264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 300.7-98.3-98.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l112 112c3.1 3.1 8.2 3.1 11.3 0l112-112zM56 32C25.1 32 0 57.1 0 88L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-368c0-30.9-25.1-56-56-56l-48 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l48 0c22.1 0 40 17.9 40 40l0 368c0 22.1-17.9 40-40 40L56 496c-22.1 0-40-17.9-40-40L16 88c0-22.1 17.9-40 40-40l48 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L56 32z" />
    </Icon>
);

export default ArrowDownToSquare;