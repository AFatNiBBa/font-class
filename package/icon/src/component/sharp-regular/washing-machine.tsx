
import { Icon } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=sharp-regular washing-machine}
 * @preview ![washing-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/washing-machine.svg)
 */
const WashingMachine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 48l0 416 352 0 0-416L48 48zM0 0L48 0 400 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM104 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM144 256c32 0 56 16 80 32s48 32 80 32c3.6 0 7.1-.1 10.6-.3c3.5-9.9 5.4-20.6 5.4-31.7c0-53-43-96-96-96c-42 0-77.6 26.9-90.7 64.4c3.6-.3 7.2-.4 10.7-.4zm80-112a144 144 0 1 1 0 288 144 144 0 1 1 0-288z" />
    </Icon>
);

export default WashingMachine;