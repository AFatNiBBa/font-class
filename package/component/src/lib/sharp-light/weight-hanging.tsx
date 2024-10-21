
import { Icon } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=sharp-light weight-hanging}
 * @preview ![weight-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/weight-hanging.svg)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 48c10-13.4 16-30 16-48c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 18 6 34.6 16 48L88 128 7.3 480 0 512l32.8 0 446.3 0 32.8 0-7.3-32L424 128l-104 0zm-64 32l142.5 0 73.3 320L40.2 480l73.3-320L256 160z" />
    </Icon>
);

export default WeightHanging;