
import { Icon } from "../../index";

/**
 * A component that renders the `filters` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=sharp-solid filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 96L352 256l0 128 128 96 0-224L640 96l0-64L192 32l0 64zM0 96l0 64L160 320l0 96 128 96 0-192 32-32 0-18.7L169.4 118.6l-9.4-9.4L160 96 0 96z" />
    </Icon>
);

export default Filters;