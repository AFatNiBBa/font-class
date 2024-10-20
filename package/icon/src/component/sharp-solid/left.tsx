
import { Icon } from "../../index";

/**
 * A component that renders the `left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=sharp-solid left}
 * @preview ![left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/left.svg)
 */
const Left: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 256L192 448l32 0 0-128 224 0 0-128-224 0 0-128-32 0L0 256z" />
    </Icon>
);

export default Left;