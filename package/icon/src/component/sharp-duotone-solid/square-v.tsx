
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-v` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=sharp-duotone-solid square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96.1 144l52.4 0L224 316.2 299.5 144l52.4 0L246 385.6 239.7 400l-31.4 0L202 385.6 96.1 144z" />
        <path d="M299.5 144l52.4 0L246 385.6 239.7 400l-31.4 0L202 385.6 96.1 144l52.4 0L224 316.2 299.5 144z" />
    </Icon>
);

export default SquareV;