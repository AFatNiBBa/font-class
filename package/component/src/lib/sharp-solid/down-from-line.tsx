
import { Icon } from "../../index";

/**
 * A component that renders the `down-from-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=sharp-solid down-from-line}
 * @preview ![down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-from-line.svg)
 */
const DownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 320L192 480 32 320l0-32 96 0 0-160 128 0 0 160 96 0 0 32zm0-224L32 96 0 96 0 32l32 0 320 0 32 0 0 64-32 0z" />
    </Icon>
);

export default DownFromLine;