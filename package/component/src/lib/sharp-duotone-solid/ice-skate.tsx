
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ice-skate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-skate?s=sharp-duotone-solid ice-skate}
 * @preview ![ice-skate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ice-skate.svg)
 */
const IceSkate: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 464l0 48 24 0 96 0 288 0 144 0 24 0 0-24 0-56 0-24-48 0 0 24 0 32-96 0 0-56 0-24-48 0 0 24 0 56-240 0 0-56 0-24-48 0 0 24 0 56-72 0L0 464z" />
        <path d="M32 96l0 288 480 0 0-144L320 192l-48 0-16 0 0-32 16 0 48 0 0-32-48 0-16 0 0-32 16 0 48 0 0-96L256 0l0 32L32 96z" />
    </Icon>
);

export default IceSkate;