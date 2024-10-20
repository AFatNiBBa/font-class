
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-u` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-u?s=sharp-duotone-solid square-u}
 * @preview ![square-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-u.svg)
 */
const SquareU: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 144l48 0 0 24 0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120 0-24 48 0 0 24 0 120c0 53.6-37.7 98.4-88 109.4l0 2.6-24 0c-61.9 0-112-50.1-112-112l0-120 0-24z" />
        <path d="M160 144l0 24 0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120 0-24 48 0 0 24 0 120c0 53.6-37.7 98.4-88 109.4l0 2.6-24 0c-61.9 0-112-50.1-112-112l0-120 0-24 48 0z" />
    </Icon>
);

export default SquareU;