
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=sharp-duotone-solid circle-up-right}
 * @preview ![circle-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-up-right.svg)
 */
const CircleUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 56l76-76-52-52 24-24 160 0 0 160-24 24-52-52-76 76-56-56z" />
        <path d="M328 344l24-24 0-160-160 0-24 24 52 52-76 76 56 56 76-76 52 52z" />
    </Icon>
);

export default CircleUpRight;