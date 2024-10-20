
import { Icon } from "../../index";

/**
 * A component that renders the `house-crack` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-crack?s=sharp-regular house-crack}
 * @preview ![house-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-crack.svg)
 */
const HouseCrack: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M303.5 13.7L288 .5 272.5 13.7l-264 224 31.1 36.6L64 253.5 64 488l0 24 24 0 400 0 24 0 0-24 0-234.5 24.5 20.8 31.1-36.6-264-224zM112 464l0-251.2L288 63.5 464 212.8 464 464l-147.2 0L288 416l96-80L224 224l64 112-96 80 28.8 48L112 464z" />
    </Icon>
);

export default HouseCrack;