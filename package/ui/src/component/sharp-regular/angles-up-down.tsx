
import { Icon } from "../../index";

/**
 * A component that renders the `angles-up-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up-down?s=sharp-regular angles-up-down}
 * @preview ![angles-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angles-up-down.svg)
 */
const AnglesUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M239 498.7l160-128 18.7-15-30-37.5-18.7 15-145 116L79 333.3l-18.7-15-30 37.5 18.7 15 160 128 15 12 15-12zm0-485.5l-15-12-15 12L49 141.3l-18.7 15 30 37.5 18.7-15 145-116 145 116 18.7 15 30-37.5-18.7-15L239 13.3z" />
    </Icon>
);

export default AnglesUpDown;