
import { Icon } from "../../index";

/**
 * A component that renders the `house` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house?s=sharp-solid house}
 * @preview ![house](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house.svg)
 */
const House: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M511.8 287.6l64.2 0 0-47.6L288.4 0 0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 128 0 0 160 160.8 0-1-224.4z" />
    </Icon>
);

export default House;