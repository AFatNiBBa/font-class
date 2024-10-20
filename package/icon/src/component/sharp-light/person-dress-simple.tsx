
import { Icon } from "../../index";

/**
 * A component that renders the `person-dress-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-simple?s=sharp-light person-dress-simple}
 * @preview ![person-dress-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-dress-simple.svg)
 */
const PersonDressSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M160 64A32 32 0 1 0 96 64a32 32 0 1 0 64 0zM64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM42.4 352l171.2 0L167.9 192l-79.7 0L42.4 352zM64 160l128 0 54.9 192 9.1 32-33.3 0L192 384l0 112 0 16-32 0 0-16 0-112-64 0 0 112 0 16-32 0 0-16 0-112-30.7 0L0 384l9.1-32L64 160z" />
    </Icon>
);

export default PersonDressSimple;