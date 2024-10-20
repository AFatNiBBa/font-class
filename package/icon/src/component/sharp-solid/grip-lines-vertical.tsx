
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=sharp-solid grip-lines-vertical}
 * @preview ![grip-lines-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grip-lines-vertical.svg)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 32L0 32 0 480l64 0L64 32zm128 0l-64 0 0 448 64 0 0-448z" />
    </Icon>
);

export default GripLinesVertical;