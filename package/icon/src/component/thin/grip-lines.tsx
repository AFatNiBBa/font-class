
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=thin grip-lines}
 * @preview ![grip-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/grip-lines.svg)
 */
const GripLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 192c0-4.4-3.6-8-8-8L8 184c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8zm0 128c0-4.4-3.6-8-8-8L8 312c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8z" />
    </Icon>
);

export default GripLines;