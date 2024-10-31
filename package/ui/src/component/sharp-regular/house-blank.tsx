
import { Icon } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=sharp-regular house-blank}
 * @preview ![house-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-blank.svg)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M303.5 13.7L288 .5 272.5 13.7l-264 224 31.1 36.6L64 253.5 64 488l0 24 24 0 400 0 24 0 0-24 0-234.5 24.5 20.8 31.1-36.6-264-224zM464 212.8L464 464l-352 0 0-251.2L288 63.5 464 212.8z" />
    </Icon>
);

export default HouseBlank;