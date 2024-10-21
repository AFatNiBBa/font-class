
import { Icon, generic } from "../../index";

/**
 * A component that renders the `6` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=sharp-duotone-solid 6}
 * @preview ![6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/6.svg)
 */
const $6: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M160 416a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM253 32L156.5 160c1.2 0 2.3 0 3.5 0c88.4 0 160 71.6 160 160s-71.6 160-160 160S0 408.4 0 320c0-38.1 12.4-75.2 35.3-105.6L172.8 32 253 32z" />
    </Icon>
);

export default $6;