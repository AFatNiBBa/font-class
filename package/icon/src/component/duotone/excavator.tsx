
import { Icon, generic } from "../../index";

/**
 * A component that renders the `excavator` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/excavator?s=duotone excavator}
 * @preview ![excavator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/excavator.svg)
 */
const Excavator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 432c0-44.2 35.8-80 80-80l256 0c44.2 0 80 35.8 80 80s-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80zm64 0c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 416c-8.8 0-16 7.2-16 16zM416 160L562.7 13.3c8.5-8.5 20-13.3 32-13.3c25 0 45.3 20.3 45.3 45.3L640 320l0 64 0 48c0 44.2-35.8 80-80 80l-78.1 0c-18.7 0-33.9-15.2-33.9-33.9c0-9 3.6-17.6 9.9-24L576 336l0-208L416 288l0-128z" />
        <path d="M238.9 64l64 96L160 160l0-96 78.9 0zM384 208l0-17.5c0-15.8-4.7-31.2-13.4-44.4L292.1 28.5C280.3 10.7 260.3 0 238.9 0L144 0C117.5 0 96 21.5 96 48l0 112-48 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-48 0-16z" />
    </Icon>
);

export default Excavator;