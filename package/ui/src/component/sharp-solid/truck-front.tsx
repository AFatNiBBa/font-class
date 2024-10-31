
import { Icon } from "../../index";

/**
 * A component that renders the `truck-front` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-front?s=sharp-solid truck-front}
 * @preview ![truck-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/truck-front.svg)
 */
const TruckFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 448-32 0 0 64-96 0 0-64-256 0 0 64-96 0 0-64L0 448 0 0zM136 128l-24 96 288 0-24-96-240 0zm-8 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TruckFront;