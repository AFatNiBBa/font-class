
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=sharp-duotone-solid blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L16 64l16 0 96 0 0 64L0 128zm0 96l16-64 112 0 0 64L0 224zM160 64l320 0 16 0 16 64-352 0 0-64zm0 96l336 0 16 64-352 0 0-64z" />
        <path d="M0 0L32 0 480 0l32 0 0 64-32 0L160 64l0 354.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L128 64 32 64 0 64 0 0z" />
    </Icon>
);

export default BlindsRaised;