
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=sharp-regular blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L0 48l20 0L12 80 0 128l49.5 0 62.5 0 0-48L61.5 80l8-32L112 48l32 0 0 32 0 48 0 80 0 48 0 116.1C116 382 96 408.6 96 440c0 39.8 32.2 72 72 72s72-32.2 72-72c0-31.4-20-58-48-67.9L192 256l0-48 0-80 0-48 0-32 32 0 218.5 0 8 32L224 80l0 48 238.5 0 49.5 0L500 80l-8-32 20 0 0-48L488 0l-8 0L192 0 144 0 32 0 24 0 0 0zM144 440a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM112 208l-49 0 13.2-48-49.8 0L13.2 208 0 256l49.8 0 62.2 0 0-48zm112 48l238.2 0 49.8 0-13.2-48-13.2-48-49.8 0L449 208l-225 0 0 48z" />
    </Icon>
);

export default BlindsRaised;