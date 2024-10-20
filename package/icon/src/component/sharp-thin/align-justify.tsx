
import { Icon } from "../../index";

/**
 * A component that renders the `align-justify` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-justify?s=sharp-thin align-justify}
 * @preview ![align-justify](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/align-justify.svg)
 */
const AlignJustify: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 56L0 56 0 72l8 0 432 0 8 0 0-16-8 0L8 56zM0 184l0 16 8 0 432 0 8 0 0-16-8 0L8 184l-8 0zM8 312l-8 0 0 16 8 0 432 0 8 0 0-16-8 0L8 312zM8 440l-8 0 0 16 8 0 432 0 8 0 0-16-8 0L8 440z" />
    </Icon>
);

export default AlignJustify;