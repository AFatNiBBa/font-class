
import { Icon } from "../../index";

/**
 * A component that renders the `mars-and-venus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-and-venus?s=sharp-thin mars-and-venus}
 * @preview ![mars-and-venus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mars-and-venus.svg)
 */
const MarsAndVenus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376 0l-8 0 0 16 8 0 92.7 0-97.2 97.2C342.3 82.9 301.4 64 256 64C167.6 64 96 135.6 96 224c0 85.7 67.4 155.6 152 159.8l0 48.2-48 0-8 0 0 16 8 0 48 0 0 56 0 8 16 0 0-8 0-56 48 0 8 0 0-16-8 0-48 0 0-48.2c84.6-4.2 152-74.1 152-159.8c0-37.2-12.7-71.5-34-98.7l98-98 0 92.7 0 8 16 0 0-8L496 8l0-8-8 0L376 0zM256 80a144 144 0 1 1 0 288 144 144 0 1 1 0-288z" />
    </Icon>
);

export default MarsAndVenus;