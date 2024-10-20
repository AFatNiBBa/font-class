
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=duotone circle-divide}
 * @preview ![circle-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-divide.svg)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 0c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24zm144-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-80 96c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24zm112 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CircleDivide;