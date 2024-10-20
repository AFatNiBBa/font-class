
import { Icon } from "../../index";

/**
 * A component that renders the `align-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=sharp-thin align-left}
 * @preview ![align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/align-left.svg)
 */
const AlignLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 56L0 56 0 72l8 0 272 0 8 0 0-16-8 0L8 56zM8 184l-8 0 0 16 8 0 432 0 8 0 0-16-8 0L8 184zM0 312l0 16 8 0 272 0 8 0 0-16-8 0L8 312l-8 0zM8 440l-8 0 0 16 8 0 432 0 8 0 0-16-8 0L8 440z" />
    </Icon>
);

export default AlignLeft;