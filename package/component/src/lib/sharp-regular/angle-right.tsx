
import { Icon } from "../../index";

/**
 * A component that renders the `angle-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=sharp-regular angle-right}
 * @preview ![angle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angle-right.svg)
 */
const AngleRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M289.9 256l-17 17L113 433l-17 17L62.1 416l17-17 143-143L79 113l-17-17L96 62.1l17 17L273 239l17 17z" />
    </Icon>
);

export default AngleRight;