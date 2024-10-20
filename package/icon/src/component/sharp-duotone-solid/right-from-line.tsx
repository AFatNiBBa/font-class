
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-line?s=sharp-duotone-solid right-from-line}
 * @preview ![right-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right-from-line.svg)
 */
const RightFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32L64 96l0-32L0 64z" />
        <path d="M448 256L288 96l-32 0 0 96L96 192l0 128 160 0 0 96 32 0L448 256z" />
    </Icon>
);

export default RightFromLine;