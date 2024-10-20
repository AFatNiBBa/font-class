
import { Icon } from "../../index";

/**
 * A component that renders the `apartment` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apartment?s=sharp-solid apartment}
 * @preview ![apartment](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/apartment.svg)
 */
const Apartment: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 0L128 0l0 96L0 96 0 512l128 0 32 0 96 0 0-128 64 0 0 128 96 0 32 0 128 0 0-320-128 0L448 0zM320 320l0-64 64 0 0 64-64 0zm192 96l-64 0 0-64 64 0 0 64zM64 320l0-64 64 0 0 64-64 0zm64 96l-64 0 0-64 64 0 0 64zm64-96l0-64 64 0 0 64-64 0zM384 64l0 64-64 0 0-64 64 0zM192 64l64 0 0 64-64 0 0-64zM384 224l-64 0 0-64 64 0 0 64zm64 96l0-64 64 0 0 64-64 0zM128 224l-64 0 0-64 64 0 0 64zm64 0l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default Apartment;