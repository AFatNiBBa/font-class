
import { Icon } from "../../index";

/**
 * A component that renders the `registered` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=sharp-regular registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l0 24 0 112 0 120 48 0 0-96 42.9 0 61.3 96 57 0-62.7-98.1c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80l-104 0-24 0zm48 112l0-64 80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-24 0-56 0z" />
    </Icon>
);

export default Registered;