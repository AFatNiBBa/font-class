
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meter-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=sharp-duotone-solid meter-bolt}
 * @preview ![meter-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/meter-bolt.svg)
 */
const MeterBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c80.8 0 152.9-37.5 199.9-96L384 416l0-71.7 127.9-97.1C507.2 109.9 394.4 0 256 0C114.6 0 0 114.6 0 256zM128 128l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32z" />
        <path d="M640 376L464 512l40-128H416V360L592 224 552 352h88v24z" />
    </Icon>
);

export default MeterBolt;