
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=thin grip-lines-vertical}
 * @preview ![grip-lines-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/grip-lines-vertical.svg)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M32 32c-4.4 0-8 3.6-8 8l0 432c0 4.4 3.6 8 8 8s8-3.6 8-8L40 40c0-4.4-3.6-8-8-8zm128 0c-4.4 0-8 3.6-8 8l0 432c0 4.4 3.6 8 8 8s8-3.6 8-8l0-432c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default GripLinesVertical;