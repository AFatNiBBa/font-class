
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-line?s=sharp-light left-to-line}
 * @preview ![left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/left-to-line.svg)
 */
const LeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 432l0 16L0 448l0-16L0 80 0 64l32 0 0 16 0 352zM304 208l-32 0 0-32 0-48-17.7 0L139.1 256 254.3 384l17.7 0 0-48 0-32 32 0 112 0 0-96-112 0zm0-112l0 32 0 16 0 32 32 0 80 0 32 0 0 32 0 96 0 32-32 0-80 0-32 0 0 32 0 16 0 32-32 0-32 0L96 256 240 96l32 0 32 0z" />
    </Icon>
);

export default LeftToLine;