
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=sharp-regular clapperboard}
 * @preview ![clapperboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clapperboard.svg)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 208l0 224 416 0 0-224L48 208zm352-48l64-64 0-16-48 0-80 80 64 0zM320 80l-64 0-80 80 64 0 80-80zM160 80L96 80 48 128l0 32 32 0 80-80zm352 80l0 24 0 24 0 224 0 48-48 0L48 480 0 480l0-48L0 208l0-24 0-24L0 80 0 32l48 0 416 0 48 0 0 48 0 80z" />
    </Icon>
);

export default Clapperboard;