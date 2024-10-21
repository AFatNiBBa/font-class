
import { Icon } from "../../index";

/**
 * A component that renders the `house-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-lock?s=sharp-solid house-lock}
 * @preview ![house-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-lock.svg)
 */
const HouseLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288.4 0L488.7 167.1C446.2 183 416 224 416 272l0 16-32 0 0 224-32 0 0-160-128 0 0 160L64.1 512l0-224.4L0 287.6 0 240 288.4 0zM528 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default HouseLock;