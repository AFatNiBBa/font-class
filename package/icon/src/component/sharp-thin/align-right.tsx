
import { Icon } from "../../index";

/**
 * A component that renders the `align-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=sharp-thin align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M440 56l8 0 0 16-8 0L168 72l-8 0 0-16 8 0 272 0zm0 128l8 0 0 16-8 0L8 200l-8 0 0-16 8 0 432 0zm8 128l0 16-8 0-272 0-8 0 0-16 8 0 272 0 8 0zm-8 128l8 0 0 16-8 0L8 456l-8 0 0-16 8 0 432 0z" />
    </Icon>
);

export default AlignRight;