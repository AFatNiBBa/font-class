
import { Icon } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=solid washing-machine}
 * @preview ![washing-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/washing-machine.svg)
 */
const WashingMachine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM368 304A144 144 0 1 0 80 304a144 144 0 1 0 288 0zM88 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM208 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm16 328c-61.9 0-112-50.1-112-112c0-16.5 3.6-32.2 10-46.3c7.4-1.1 14.8-1.7 22-1.7c32 0 56 16 80 32s48 32 80 32c10.9 0 21.4-.9 31.2-2.5C328.5 373 281.3 416 224 416z" />
    </Icon>
);

export default WashingMachine;