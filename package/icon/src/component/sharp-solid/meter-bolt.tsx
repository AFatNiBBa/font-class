
import { Icon } from "../../index";

/**
 * A component that renders the `meter-bolt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=sharp-solid meter-bolt}
 * @preview ![meter-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/meter-bolt.svg)
 */
const MeterBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 512c80.8 0 152.9-37.5 199.9-96L384 416l0-71.7 127.9-97.1C507.2 109.9 394.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512zM192 160l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32zm96 0l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32zm96 0l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32zM504 384L464 512 640 376l0-24-88 0 40-128L416 360l0 24 88 0z" />
    </Icon>
);

export default MeterBolt;