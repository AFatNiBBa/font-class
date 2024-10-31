
import { Icon, generic } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=sharp-duotone-solid washing-machine}
 * @preview ![washing-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/washing-machine.svg)
 */
const WashingMachine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 304c0 79.5 64.5 144 144 144c77.6 0 140.9-61.4 143.9-138.2C350 315.4 328.1 320 304 320c-32 0-56-16-80-32s-48-32-80-32c-19.7 0-40.6 4.7-59 10.4c-3.2 12-5 24.6-5 37.6zM160 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M448 0L0 0 0 512l448 0L448 0zM224 160a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM64 88a24 24 0 1 1 48 0A24 24 0 1 1 64 88zM184 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default WashingMachine;