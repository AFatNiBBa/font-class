
import { Icon } from "../../index";

/**
 * A component that renders the `house-crack` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-crack?s=sharp-solid house-crack}
 * @preview ![house-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-crack.svg)
 */
const HouseCrack: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M511.8 287.6l64.2 0 0-47.6L288.4 0 0 240l0 47.6 64.1 0 0 224.4 166.3 0L192 448l96-80L224 256 384 368l-96 80 38.4 64 186.4 0-1-224.4z" />
    </Icon>
);

export default HouseCrack;