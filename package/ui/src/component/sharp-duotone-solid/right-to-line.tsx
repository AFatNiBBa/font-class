
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-line?s=sharp-duotone-solid right-to-line}
 * @preview ![right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right-to-line.svg)
 */
const RightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M352 256L192 96l-32 0 0 96L0 192 0 320l160 0 0 96 32 0L352 256z" />
    </Icon>
);

export default RightToLine;