
import { Icon } from "../../index";

/**
 * A component that renders the `shuttle-space` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttle-space?s=sharp-solid shuttle-space}
 * @preview ![shuttle-space](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shuttle-space.svg)
 */
const ShuttleSpace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 480l-64 0 0-96 224 0L192 480zM96 380.8l0 3.2 0 96-64 0 0-96-8 0L0 384l0-24 0-32L0 184l0-32 0-24 24 0 8 0 0-96 64 0 0 96 0 3.2L150.7 160 456 160c70.4 0 127.6 23.5 171.2 81.6L638 256l-10.8 14.4C583.6 328.5 526.4 352 456 352l-305.3 0L96 380.8zM128 128l0-96 64 0 160 96-224 0zM512 248c0-22.1-17.9-40-40-40l0 96c22.1 0 40-17.9 40-40l0-16z" />
    </Icon>
);

export default ShuttleSpace;