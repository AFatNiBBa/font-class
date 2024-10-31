
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=sharp-duotone-solid mobile}
 * @preview ![mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mobile.svg)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 384l0 128 352 0 0-128L16 384zm128 48l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32z" />
        <path d="M16 0H368V384H16V0z" />
    </Icon>
);

export default Mobile;