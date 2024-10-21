
import { Icon } from "../../index";

/**
 * A component that renders the `ribbon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ribbon?s=sharp-solid ribbon}
 * @preview ![ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ribbon.svg)
 */
const Ribbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M333.2 322.8s0 0 0 0l-133.9-146s0 0 0 0L146 118.6c7.8-5.1 78-22.6 78-22.6s70.2 17.4 78 22.6L245.7 180l85.6 93.4L384 216l0-96L304 0 144 0 64 112l0 88 79.6 91.3s0 0 0 0l83.3 95.6s0 0 0 0l19.6 22.5L336 512l112-64L333.2 322.8zM205.2 410.6l-83.3-95.6L0 448l112 64 93.2-101.4z" />
    </Icon>
);

export default Ribbon;