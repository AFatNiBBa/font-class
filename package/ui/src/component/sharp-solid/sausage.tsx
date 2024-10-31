
import { Icon } from "../../index";

/**
 * A component that renders the `sausage` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=sharp-solid sausage}
 * @preview ![sausage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sausage.svg)
 */
const Sausage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 160c0-42.1 27.1-77.8 64.7-90.8L360 0 472 0 447.3 69.2c37.7 13 64.7 48.7 64.7 90.8c0 194.4-157.6 352-352 352c-42.1 0-77.8-27.1-90.8-64.7L0 472 0 360l69.2 24.7c13-37.7 48.7-64.7 90.8-64.7c88.4 0 160-71.6 160-160zM160 400c132.5 0 240-107.5 240-240l-32 0c0 114.9-93.1 208-208 208l0 32z" />
    </Icon>
);

export default Sausage;