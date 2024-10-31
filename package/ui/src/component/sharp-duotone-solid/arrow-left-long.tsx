
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=sharp-duotone-solid arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M90.5 256c10.7-10.7 21.3-21.3 32-32L480 224l32 0 0 64-32 0-357.5 0c-10.7-10.7-21.3-21.3-32-32z" />
        <path d="M0 256l22.6 22.6 128 128 22.6 22.6L218.5 384l-22.6-22.6L90.5 256 195.9 150.6 218.5 128 173.3 82.7l-22.6 22.6-128 128L0 256z" />
    </Icon>
);

export default ArrowLeftLong;