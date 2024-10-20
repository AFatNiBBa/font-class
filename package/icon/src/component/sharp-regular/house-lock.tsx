
import { Icon } from "../../index";

/**
 * A component that renders the `house-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-lock?s=sharp-regular house-lock}
 * @preview ![house-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-lock.svg)
 */
const HouseLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M303.5 13.7L288 .5 272.5 13.7l-264 224 31.1 36.6L64 253.5 64 488l0 24 24 0 296 0 0-48s0 0 0 0l0-168 0-24-24 0-144 0-24 0 0 24 0 168-80 0 0-251.2L288 63.5 445.1 196.7c11.2-12.3 25-22.1 40.6-28.5L303.5 13.7zM336 464l-96 0 0-144 96 0 0 144zM528 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default HouseLock;