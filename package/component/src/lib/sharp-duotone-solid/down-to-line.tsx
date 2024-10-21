
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=sharp-duotone-solid down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416l32 0 320 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
        <path d="M192 384L352 224l0-32-96 0 0-160L128 32l0 160-96 0 0 32L192 384z" />
    </Icon>
);

export default DownToLine;