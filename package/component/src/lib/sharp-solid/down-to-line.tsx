
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=sharp-solid down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 224L192 384 32 224l0-32 96 0 0-160 128 0 0 160 96 0 0 32zM32 416l320 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0z" />
    </Icon>
);

export default DownToLine;