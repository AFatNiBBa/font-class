
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=sharp-duotone-solid clipboard-check}
 * @preview ![clipboard-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clipboard-check.svg)
 */
const ClipboardCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l80 0 0 72 0 24 112 0 88 0 24 0 0-72 0-24 80 0 0 448L0 512 0 64zM62.1 320l17 17 64 64 17 17 17-17L305 273l17-17L288 222.1l-17 17-111 111-47-47-17-17L62.1 320z" />
        <path d="M270.4 64C263 27.5 230.7 0 192 0s-71 27.5-78.4 64L80 64l0 96 112 0 112 0 0-96-33.6 0zM168 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM305 273l17-17L288 222.1l-17 17-111 111-47-47-17-17L62.1 320l17 17 64 64 17 17 17-17L305 273z" />
    </Icon>
);

export default ClipboardCheck;