
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-ladder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ladder?s=sharp-duotone-solid truck-ladder}
 * @preview ![truck-ladder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-ladder.svg)
 */
const TruckLadder: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L352 0l0 48-32 0 0 96 32 0 0 48L0 192l0-48 32 0 0-96L0 48 0 0zM80 48l0 96 32 0 0-96L80 48zM240 432A80 80 0 1 1 80 432a80 80 0 1 1 160 0zM160 48l0 96 32 0 0-96-32 0zm80 0l0 96 32 0 0-96-32 0zM560 432a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M416 96l-32 0 0 32 0 96L0 224 0 416l49.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l98.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l49.1 0 0-128 0-32 0-32 0-13.3-9.4-9.4-96-96L525.3 96 512 96l-96 0zM576 256l-128 0 0-96 50.7 0L576 237.3l0 18.7z" />
    </Icon>
);

export default TruckLadder;