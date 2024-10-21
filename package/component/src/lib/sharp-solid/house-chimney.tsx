
import { Icon } from "../../index";

/**
 * A component that renders the `house-chimney` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney?s=sharp-solid house-chimney}
 * @preview ![house-chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-chimney.svg)
 */
const HouseChimney: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 287.6l-64.2 0 1 224.4L472 512l-16 0-104 0 0-160-128 0 0 160-104 0-16 0-39.9 0 0-37.2c-.1-.9-.1-1.8-.1-2.8l0-112c0-.9 0-1.9 .1-2.8l0-69.7L0 287.6 0 240 288.4 0 416 106.5 416 32l96 0 0 154.6L576 240l0 47.6z" />
    </Icon>
);

export default HouseChimney;