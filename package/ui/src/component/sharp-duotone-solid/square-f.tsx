
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-f` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-f?s=sharp-duotone-solid square-f}
 * @preview ![square-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-f.svg)
 */
const SquareF: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l24 0 144 0 24 0 0 48-24 0-120 0 0 64 88 0 24 0 0 48-24 0-88 0 0 72 0 24-48 0 0-24 0-96 0-112 0-24z" />
        <path d="M128 128l24 0 144 0 24 0 0 48-24 0-120 0 0 64 88 0 24 0 0 48-24 0-88 0 0 72 0 24-48 0 0-24 0-96 0-112 0-24z" />
    </Icon>
);

export default SquareF;