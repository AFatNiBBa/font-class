
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=sharp-regular grip-lines-vertical}
 * @preview ![grip-lines-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/grip-lines-vertical.svg)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M56 32L8 32 8 480l48 0L56 32zm128 0l-48 0 0 448 48 0 0-448z" />
    </Icon>
);

export default GripLinesVertical;