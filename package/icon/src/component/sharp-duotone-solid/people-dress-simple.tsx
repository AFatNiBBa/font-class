
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-dress-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-dress-simple?s=sharp-duotone-solid people-dress-simple}
 * @preview ![people-dress-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-dress-simple.svg)
 */
const PeopleDressSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64z" />
        <path d="M64 160l128 0 64 224-64 0 0 128L64 512l0-128L0 384 64 160zM256 384l64-224 128 0 64 224-64 0 0 128-128 0 0-128-64 0z" />
    </Icon>
);

export default PeopleDressSimple;