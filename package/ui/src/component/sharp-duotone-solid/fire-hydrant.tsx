
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-hydrant` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-hydrant?s=sharp-duotone-solid fire-hydrant}
 * @preview ![fire-hydrant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fire-hydrant.svg)
 */
const FireHydrant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 272l0 128 48 0 0-128-48 0zM32 128l0 48 24 0 8 0 256 0 8 0 24 0 0-48-24 0-12 0c-11.6-45-47-80.4-92-92l0-4 0-32L160 0l0 32 0 4c-45 11.6-80.4 47-92 92l-12 0-24 0zM320 272l0 128 48 0 0-128-48 0z" />
        <path d="M64 176l256 0 0 288 8 0 24 0 0 48-24 0-8 0L64 512l-8 0-24 0 0-48 24 0 8 0 0-288zM192 400a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default FireHydrant;