
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-g` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-g?s=sharp-duotone-solid square-g}
 * @preview ![square-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-g.svg)
 */
const SquareG: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 256c0-70.7 57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6l-32 35.8C263.2 183.7 244.5 176 224 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c35.8 0 66.1-23.5 76.3-56L248 280l-24 0 0-48 24 0 80 0 24 0 0 24c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M224 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c35.8 0 66.1-23.5 76.3-56L248 280l-24 0 0-48 24 0 80 0 24 0 0 24c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6l-32 35.8C263.2 183.7 244.5 176 224 176z" />
    </Icon>
);

export default SquareG;