
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=solid circle-half}
 * @preview ![circle-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-half.svg)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c0-17.7-14.4-32.2-31.9-30C97.8 17.7 0 125.4 0 256S97.8 494.3 224.1 510c17.5 2.2 31.9-12.4 31.9-30l0-448z" />
    </Icon>
);

export default CircleHalf;