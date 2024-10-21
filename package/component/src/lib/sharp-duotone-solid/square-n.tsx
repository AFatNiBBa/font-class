
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-n` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=sharp-duotone-solid square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm112 96l35.1 0 7.2 8.5L288 294.5 288 152l0-24 48 0 0 24 0 208 0 24-35.1 0-7.2-8.5L160 217.5 160 360l0 24-48 0 0-24 0-208 0-24z" />
        <path d="M336 128l-48 0 0 24 0 142.5-133.7-158-7.2-8.5L112 128l0 24 0 208 0 24 48 0 0-24 0-142.5 133.7 158 7.2 8.5 35.1 0 0-24 0-208 0-24z" />
    </Icon>
);

export default SquareN;