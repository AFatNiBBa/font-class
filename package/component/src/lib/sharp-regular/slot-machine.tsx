
import { Icon } from "../../index";

/**
 * A component that renders the `slot-machine` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slot-machine?s=sharp-regular slot-machine}
 * @preview ![slot-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/slot-machine.svg)
 */
const SlotMachine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 416l0 48-16 0-24 0-248 0 0-48 288 0zM112 512l248 0 24 0 16 0 48 0 144 0 24 0 0-24 0-270.4c14.3-8.3 24-23.8 24-41.6c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 17.8 9.7 33.3 24 41.6L568 464l-120 0 0-48 16 0 48 0 0-48 0-224 0-48-48 0-16 0 0-48 0-48L400 0 112 0 64 0l0 48 0 48L48 96 0 96l0 48L0 368l0 48 48 0 16 0 0 48 0 48 48 0zm0-416l0-48 288 0 0 48L112 96zm352 48l0 224L48 368l0-224 416 0zM192 204.2l0-28.2-24 0-56 0-24 0 0 48 24 0 21.9 0L95.4 331.9 93.9 336l51 0 45.7-127.9 1.4-3.9zM312 176l-24 0-56 0-24 0 0 48 24 0 21.9 0L215.4 331.9l-1.5 4.1 51 0 45.7-127.9 1.4-3.9 0-28.2zm120 28.2l0-28.2-24 0-56 0-24 0 0 48 24 0 21.9 0L335.4 331.9l-1.5 4.1 51 0 45.7-127.9 1.4-3.9z" />
    </Icon>
);

export default SlotMachine;