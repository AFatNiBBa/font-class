
import { Icon, generic } from "../../index";

/**
 * A component that renders the `outlet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=sharp-duotone-solid outlet}
 * @preview ![outlet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/outlet.svg)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 88 64 128 64 128l192 0s64-40 64-128s-64-128-64-128l-192 0s-64 40-64 128zm80-64l32 0 0 16 0 48 0 16-32 0 0-16 0-48 0-16zm56 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 24-48 0 0-24zm72-120l32 0 0 16 0 48 0 16-32 0 0-16 0-48 0-16z" />
        <path d="M448 32L0 32 0 480l448 0 0-448zM64 256c0-88 64-128 64-128l192 0s64 40 64 128s-64 128-64 128l-192 0s-64-40-64-128z" />
    </Icon>
);

export default Outlet;