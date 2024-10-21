
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=regular grip-lines-vertical}
 * @preview ![grip-lines-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/grip-lines-vertical.svg)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M32 32C18.7 32 8 42.7 8 56L8 456c0 13.3 10.7 24 24 24s24-10.7 24-24L56 56c0-13.3-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default GripLinesVertical;