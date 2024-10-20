
import { Icon } from "../../index";

/**
 * A component that renders the `house` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house?s=sharp-regular house}
 * @preview ![house](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house.svg)
 */
const House: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M303.5 13.7L288 .5 272.5 13.7l-264 224 31.1 36.6L64 253.5 64 488l0 24 24 0 400 0 24 0 0-24 0-234.5 24.5 20.8 31.1-36.6-264-224zM112 464l0-251.2L288 63.5 464 212.8 464 464l-80 0 0-168 0-24-24 0-144 0-24 0 0 24 0 168-80 0zm128 0l0-144 96 0 0 144-96 0z" />
    </Icon>
);

export default House;