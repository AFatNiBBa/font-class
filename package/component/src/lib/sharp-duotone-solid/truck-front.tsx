
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-front` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-front?s=sharp-duotone-solid truck-front}
 * @preview ![truck-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-front.svg)
 */
const TruckFront: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 448l96 0 0 64-96 0 0-64zm80-224l24-96 240 0 24 96-288 0zM384 448l96 0 0 64-96 0 0-64z" />
        <path d="M512 0L0 0 0 448l512 0L512 0zM112 224l24-96 240 0 24 96-288 0zM64 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TruckFront;