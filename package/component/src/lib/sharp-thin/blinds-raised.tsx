
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=sharp-thin blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 16l0 64 480 0 0-64L16 16zM0 0L16 0 496 0l16 0 0 16 0 64 0 16-16 0L152 96l0 80 0 16 0 80 0 16 0 128c0 .2 0 .4 0 .7c22.7 3.8 40 23.5 40 47.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-23.8 17.3-43.5 40-47.3c0-.2 0-.4 0-.7l0-128 0-16 0-80 0-16 0-80L16 96 0 96 0 80 0 16 0 0zM104 176l0 16-86.9 0L0 192l6-16 18-48 17.1 0-18 48 80.9 0zm80 16l0-16 304.9 0-18-48 17.1 0 18 48 6 16-17.1 0L184 192zm304.9 80l-18-48 17.1 0 18 48 6 16-17.1 0L184 288l0-16 304.9 0zM104 272l0 16-86.9 0L0 288l6-16 18-48 17.1 0-18 48 80.9 0zm40 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default BlindsRaised;