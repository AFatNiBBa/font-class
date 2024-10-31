
import { Icon } from "../../index";

/**
 * A component that renders the `left-from-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-from-line?s=sharp-solid left-from-line}
 * @preview ![left-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/left-from-line.svg)
 */
const LeftFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 416L0 256 160 96l32 0 0 96 160 0 0 128-160 0 0 96-32 0zm224 0l0-320 0-32 64 0 0 32 0 320 0 32-64 0 0-32z" />
    </Icon>
);

export default LeftFromLine;