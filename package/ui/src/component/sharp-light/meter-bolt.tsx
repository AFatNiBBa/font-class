
import { Icon } from "../../index";

/**
 * A component that renders the `meter-bolt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=sharp-light meter-bolt}
 * @preview ![meter-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/meter-bolt.svg)
 */
const MeterBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 256c0 1.4 0 2.8 0 4.2l30.7-30.7C497.4 100.6 388.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c72.4 0 137.9-30.1 184.4-78.5l.2-1.5-46.1 0c-38.1 30.1-86.3 48-138.6 48C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224zM176 144l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm96 0l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm96 0l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm200 80l-6.6 0-4.7 4.7-136 136-4.7 4.7 0 6.6 0 8 0 16 16 0 45.6 0-13.4 93.7L461.6 512l18.4 0 8 0 6.6 0 4.7-4.7 136-136 4.7-4.7 0-6.6 0-8 0-16-16 0-45.6 0 13.4-93.7 2.6-18.3L576 224l-8 0zM462.6 368l92.1-92.1-10.5 73.8L541.6 368l18.4 0 33.4 0-92.1 92.1 10.5-73.8 2.6-18.3L496 368l-33.4 0z" />
    </Icon>
);

export default MeterBolt;