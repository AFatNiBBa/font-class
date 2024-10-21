
import { Icon } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=sharp-solid washing-machine}
 * @preview ![washing-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/washing-machine.svg)
 */
const WashingMachine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L448 0l0 512L0 512 0 0zM368 304A144 144 0 1 0 80 304a144 144 0 1 0 288 0zM88 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM208 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm16 328c-61.9 0-112-50.1-112-112c0-16.5 3.6-32.2 10-46.3c7.4-1.1 14.8-1.7 22-1.7c32 0 56 16 80 32s48 32 80 32c10.9 0 21.4-.9 31.2-2.5C328.5 373 281.3 416 224 416z" />
    </Icon>
);

export default WashingMachine;