
import { Icon } from "../../index";

/**
 * A component that renders the `angles-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-right?s=sharp-regular angles-right}
 * @preview ![angles-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angles-right.svg)
 */
const AnglesRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M273 273l17-17-17-17L113 79l-17-17L62.1 96l17 17 143 143L79 399l-17 17L96 449.9l17-17L273 273zm192 0l17-17-17-17L305 79l-17-17L254.1 96l17 17 143 143L271 399l-17 17L288 449.9l17-17L465 273z" />
    </Icon>
);

export default AnglesRight;