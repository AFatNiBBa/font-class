
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=sharp-duotone-solid circle-quarter}
 * @preview ![circle-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-quarter.svg)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0l0 256L0 256z" />
        <path d="M0 256C0 114.6 114.6 0 256 0V256H0z" />
    </Icon>
);

export default CircleQuarter;