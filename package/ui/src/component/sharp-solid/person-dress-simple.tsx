
import { Icon } from "../../index";

/**
 * A component that renders the `person-dress-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-simple?s=sharp-solid person-dress-simple}
 * @preview ![person-dress-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-dress-simple.svg)
 */
const PersonDressSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zm128 96l64 224-64 0 0 128L64 512l0-128L0 384 64 160l128 0z" />
    </Icon>
);

export default PersonDressSimple;