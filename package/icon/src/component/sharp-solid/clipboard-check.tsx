
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=sharp-solid clipboard-check}
 * @preview ![clipboard-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clipboard-check.svg)
 */
const ClipboardCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L0 64 0 512l384 0 0-448L282.5 64C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM297 273L185 385l-17 17-17-17L87 321l-17-17L104 270.1l17 17 47 47 95-95 17-17L313.9 256l-17 17z" />
    </Icon>
);

export default ClipboardCheck;