
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=sharp-light grip-lines-vertical}
 * @preview ![grip-lines-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/grip-lines-vertical.svg)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 32L16 32l0 448 32 0L48 32zm128 0l-32 0 0 448 32 0 0-448z" />
    </Icon>
);

export default GripLinesVertical;