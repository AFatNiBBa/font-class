
import { Icon } from "../../index";

/**
 * A component that renders the `slot-machine` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slot-machine?s=sharp-solid slot-machine}
 * @preview ![slot-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/slot-machine.svg)
 */
const SlotMachine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 0L64 0l0 64 384 0 0-64zm64 96L0 96 0 416l64 0 0 96 352 0 32 0 144 0 32 0 0-32 0-268.2c9.8-8.8 16-21.6 16-35.8c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 14.2 6.2 27 16 35.8L560 448l-112 0 0-32 64 0 0-320zM80 176l72 0 24 0 0 24 0 8 0 5.3-2.2 4.8L119.4 336l-52.9 0 3.7-8.1 48-103.9L80 224l-24 0 0-48 24 0zM263.4 336l-52.9 0 3.7-8.1 48-103.9L224 224l-24 0 0-48 24 0 72 0 24 0 0 24 0 8 0 5.3-2.2 4.8L263.4 336zm144 0l-52.9 0 3.7-8.1 48-103.9L368 224l-24 0 0-48 24 0 72 0 24 0 0 24 0 8 0 5.3-2.2 4.8L407.4 336z" />
    </Icon>
);

export default SlotMachine;