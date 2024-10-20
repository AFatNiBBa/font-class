
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=sharp-thin grip-lines-vertical}
 * @preview ![grip-lines-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/grip-lines-vertical.svg)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M40 32L24 32l0 448 16 0L40 32zm128 0l-16 0 0 448 16 0 0-448z" />
    </Icon>
);

export default GripLinesVertical;