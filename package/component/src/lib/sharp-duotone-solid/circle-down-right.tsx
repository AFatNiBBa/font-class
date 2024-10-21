
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=sharp-duotone-solid circle-down-right}
 * @preview ![circle-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-down-right.svg)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-56l56-56 76 76 52-52 24 24 0 160-160 0-24-24 52-52-76-76z" />
        <path d="M328 168l24 24 0 160-160 0-24-24 52-52-76-76 56-56 76 76 52-52z" />
    </Icon>
);

export default CircleDownRight;