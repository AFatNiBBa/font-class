
import { Icon } from "../../index";

/**
 * A component that renders the `align-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=thin align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M440 56c4.4 0 8 3.6 8 8s-3.6 8-8 8L168 72c-4.4 0-8-3.6-8-8s3.6-8 8-8l272 0zm0 128c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 200c-4.4 0-8-3.6-8-8s3.6-8 8-8l432 0zm8 136c0 4.4-3.6 8-8 8l-272 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l272 0c4.4 0 8 3.6 8 8zm-8 120c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 456c-4.4 0-8-3.6-8-8s3.6-8 8-8l432 0z" />
    </Icon>
);

export default AlignRight;