
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=sharp-duotone-solid square-check}
 * @preview ![square-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-check.svg)
 */
const SquareCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM94.1 256L128 222.1l1 1 16 16 47 47L303 175l16-16 1-1L353.9 192c-.3 .3-.6 .6-1 1l-16 16L209 337l-17 17-17-17-64-64c-5.3-5.3-10.7-10.7-16-16l-1-1z" />
        <path d="M353 193L209 337l-17 17-17-17L95 257 129 223l63 63L319 159 353 193z" />
    </Icon>
);

export default SquareCheck;