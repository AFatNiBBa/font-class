
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=sharp-regular suitcase}
 * @preview ![suitcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/suitcase.svg)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 0L128 0l0 24 0 72L48 96 0 96l0 48L0 432l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0-80 0 0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48zM152 144l208 0 8 0 0 288-224 0 0-288 8 0zM48 144l48 0 0 288-48 0 0-288zM464 432l-48 0 0-288 48 0 0 288z" />
    </Icon>
);

export default Suitcase;