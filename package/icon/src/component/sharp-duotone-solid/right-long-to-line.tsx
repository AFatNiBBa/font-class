
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-long-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long-to-line?s=sharp-duotone-solid right-long-to-line}
 * @preview ![right-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right-long-to-line.svg)
 */
const RightLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M576 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
        <path d="M512 256L352 416l-32 0 0-96L0 320 0 192l320 0 0-96 32 0L512 256z" />
    </Icon>
);

export default RightLongToLine;