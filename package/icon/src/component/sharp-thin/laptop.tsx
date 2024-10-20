
import { Icon } from "../../index";

/**
 * A component that renders the `laptop` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=sharp-thin laptop}
 * @preview ![laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/laptop.svg)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 48L80 48l0 304-16 0L64 48l0-16 16 0 480 0 16 0 0 16 0 304-16 0 0-304zM54.6 464l530.7 0L624 425.4l0-25.4L16 400l0 25.4L54.6 464zM640 384l0 16 0 32-48 48L48 480 0 432l0-32 0-16 16 0 608 0 16 0z" />
    </Icon>
);

export default Laptop;