
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=regular grip-lines}
 * @preview ![grip-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/grip-lines.svg)
 */
const GripLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 192c0-13.3-10.7-24-24-24L24 168c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24zm0 128c0-13.3-10.7-24-24-24L24 296c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24z" />
    </Icon>
);

export default GripLines;