
import { Icon } from "../../index";

/**
 * A component that renders the `meter-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=sharp-regular meter-bolt}
 * @preview ![meter-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/meter-bolt.svg)
 */
const MeterBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 256c0 9.9-.7 19.6-2 29.1l49.9-37.9C507.2 109.9 394.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c80.8 0 152.9-37.5 199.9-96l-66.9 0c-36 30-82.4 48-132.9 48C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208zM192 152l0-24-48 0 0 24 0 48 0 24 48 0 0-24 0-48zm88 0l0-24-48 0 0 24 0 48 0 24 48 0 0-24 0-48zm88 0l0-24-48 0 0 24 0 48 0 24 48 0 0-24 0-48zM504 384L464 512 640 376l0-24-88 0 40-128L416 360l0 24 88 0z" />
    </Icon>
);

export default MeterBolt;