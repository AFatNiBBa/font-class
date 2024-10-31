
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-line?s=sharp-solid left-to-line}
 * @preview ![left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/left-to-line.svg)
 */
const LeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 416L96 256 256 96l32 0 0 96 160 0 0 128-160 0 0 96-32 0zM64 96l0 320 0 32L0 448l0-32L0 96 0 64l64 0 0 32z" />
    </Icon>
);

export default LeftToLine;