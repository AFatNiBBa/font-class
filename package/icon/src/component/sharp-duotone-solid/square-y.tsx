
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-y` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=sharp-duotone-solid square-y}
 * @preview ![square-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-y.svg)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM88.6 144l59.5 0L224 247.4 299.8 144l59.5 0L248 295.9l0 80.1 0 24-48 0 0-24 0-80.1L88.6 144z" />
        <path d="M88.6 144L200 295.9l0 80.1 0 24 48 0 0-24 0-80.1L359.4 144l-59.5 0L224 247.4 148.2 144l-59.5 0z" />
    </Icon>
);

export default SquareY;