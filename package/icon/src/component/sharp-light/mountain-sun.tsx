
import { Icon } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=sharp-light mountain-sun}
 * @preview ![mountain-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mountain-sun.svg)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0A80 80 0 1 0 480 80a80 80 0 1 0 160 0zM32 449.9l224-329 224 329 0 30.1L32 480l0-30.1zM0 440l0 40 0 32 32 0 425 0 23 0 32 0 96 0 32 0 0-32 0-46.3L499.2 221 480 192l-19.2 29-48.3 72.9L275.4 92.4 256 64 236.6 92.4 0 440zm608 40l-96 0 0-40L432 322.5 480 250 608 443.3l0 36.7z" />
    </Icon>
);

export default MountainSun;