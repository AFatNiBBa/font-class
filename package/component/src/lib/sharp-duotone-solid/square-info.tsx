
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-info` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-info?s=sharp-duotone-solid square-info}
 * @preview ![square-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-info.svg)
 */
const SquareInfo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM160 224l24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 24 0 0-64-24 0-24 0 0-48zm32-96l64 0 0 64-64 0 0-64z" />
        <path d="M256 128l0 64-64 0 0-64 64 0zm-96 96l24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 24 0 0-64-24 0-24 0 0-48z" />
    </Icon>
);

export default SquareInfo;