
import { Icon } from "../../index";

/**
 * A component that renders the `laptop` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=sharp-regular laptop}
 * @preview ![laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/laptop.svg)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528 80L112 80l0 240-48 0L64 80l0-48 48 0 416 0 48 0 0 48 0 240-48 0 0-240zM83.9 432l472.2 0 32-32L51.9 400l32 32zM576 480L64 480 0 416l0-16 0-48 48 0 544 0 48 0 0 48 0 16-64 64z" />
    </Icon>
);

export default Laptop;