
import { Icon } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=sharp-solid house-blank}
 * @preview ![house-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-blank.svg)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 287.6H511.8l1 224.4H64.1V287.6H0V240L288.4 0 576 240v47.6z" />
    </Icon>
);

export default HouseBlank;