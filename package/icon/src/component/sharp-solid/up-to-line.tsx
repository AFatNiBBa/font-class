
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=sharp-solid up-to-line}
 * @preview ![up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-to-line.svg)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 288L192 128 352 288l0 32-96 0 0 160-128 0 0-160-96 0 0-32zM352 96L32 96 0 96 0 32l32 0 320 0 32 0 0 64-32 0z" />
    </Icon>
);

export default UpToLine;