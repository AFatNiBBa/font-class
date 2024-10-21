
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=sharp-duotone-solid circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm134.1 88l17-17 135-135L192 192l-24 0 0-48 24 0 152 0 24 0 0 24 0 160 0 24-48 0 0-24 0-102.1L185 361l-17 17L134.1 344z" />
        <path d="M368 144l-24 0-152 0-24 0 0 48 24 0 94.1 0L151 327l-17 17L168 377.9l17-17 135-135L320 328l0 24 48 0 0-24 0-160 0-24z" />
    </Icon>
);

export default CircleArrowUpRight;