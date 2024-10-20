
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=sharp-regular font-awesome}
 * @preview ![font-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/font-awesome.svg)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 48 0 256 0 48 0 64 48 0 0-64 368 0 48 0 0-32-7.1-16L432 272l56.9-128 7.1-16 0-32-48 0L91.7 96zM80 400l0-256 356.4 0L388.1 252.5 379.5 272l8.7 19.5L436.4 400 80 400z" />
    </Icon>
);

export default FontAwesome;