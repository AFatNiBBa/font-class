
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-rotate-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-right?s=sharp-duotone-solid arrow-rotate-right}
 * @preview ![arrow-rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-rotate-right.svg)
 */
const ArrowRotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256c0 57.3 21.9 114.7 65.6 158.4S198.7 480 256 480s114.7-21.9 158.4-65.6l-45.3-45.3c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160l45.7 0 0-44.8L414.4 97.6C370.6 53.9 313.3 32 256 32S141.3 53.9 97.6 97.6S32 198.7 32 256z" />
        <path d="M496 224l-32 0-128 0-32 0 0-64 32 0 96 0 0-96 0-32 64 0 0 32 0 128 0 32z" />
    </Icon>
);

export default ArrowRotateRight;