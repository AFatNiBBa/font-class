
import { Icon } from "../../index";

/**
 * A component that renders the `left-from-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-from-line?s=sharp-light left-from-line}
 * @preview ![left-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/left-from-line.svg)
 */
const LeftFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 208l-32 0 0-32 0-48-17.7 0L43.1 256 158.3 384l17.7 0 0-48 0-32 32 0 112 0 0-96-112 0zm0-112l0 32 0 16 0 32 32 0 80 0 32 0 0 32 0 96 0 32-32 0-80 0-32 0 0 32 0 16 0 32-32 0-32 0L0 256 144 96l32 0 32 0zM448 432l0 16-32 0 0-16 0-352 0-16 32 0 0 16 0 352z" />
    </Icon>
);

export default LeftFromLine;