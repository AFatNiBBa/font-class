
import { Icon } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=sharp-regular weight-hanging}
 * @preview ![weight-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/weight-hanging.svg)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 88a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm118.4 40c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 14.4 3.5 28 9.6 40L88 128 11 464 0 512l49.2 0 413.5 0 49.2 0-11-48L424 128l-89.6 0zM256 176l129.8 0 66 288L60.2 464l66-288L256 176z" />
    </Icon>
);

export default WeightHanging;