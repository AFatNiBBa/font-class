
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=sharp-duotone-solid up-long}
 * @preview ![up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-long.svg)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 192l128 0 0 320L96 512c0-64 0-128 0-192c0-42.7 0-85.3 0-128z" />
        <path d="M320 160L160 0 0 160l0 32s0 0 0 0l96 0 128 0 96 0 0-32z" />
    </Icon>
);

export default UpLong;