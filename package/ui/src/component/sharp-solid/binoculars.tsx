
import { Icon } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=sharp-solid binoculars}
 * @preview ![binoculars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/binoculars.svg)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 32l0 64L96 96l0-64 96 0zm0 96l0 352L0 480 0 336l48-80L64 128l128 0zm128 0l128 0 16 128 48 80 0 144-192 0 0-352zm0-96l96 0 0 64-96 0 0-64zm-32 96l0 160-64 0 0-160 64 0z" />
    </Icon>
);

export default Binoculars;