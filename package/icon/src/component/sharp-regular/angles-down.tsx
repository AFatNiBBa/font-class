
import { Icon } from "../../index";

/**
 * A component that renders the `angles-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-down?s=sharp-regular angles-down}
 * @preview ![angles-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angles-down.svg)
 */
const AnglesDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M241 273l-17 17-17-17L47 113l-17-17L64 62.1 81 79l143 143L367 79l17-17L417.9 96l-17 17L241 273zm0 192l-17 17-17-17L47 305l-17-17L64 254.1l17 17 143 143L367 271l17-17L417.9 288l-17 17L241 465z" />
    </Icon>
);

export default AnglesDown;