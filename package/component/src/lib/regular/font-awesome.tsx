
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=regular font-awesome}
 * @preview ![font-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/font-awesome.svg)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 48 0 256 0 48 0 64 48 0 0-64 389.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96zM80 400l0-256 356.4 0L388.1 252.5c-5.5 12.4-5.5 26.6 0 39L436.4 400 80 400z" />
    </Icon>
);

export default FontAwesome;