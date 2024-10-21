
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-city` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-city?s=sharp-duotone-solid tree-city}
 * @preview ![tree-city](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tree-city.svg)
 */
const TreeCity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 0l0 512 96 0 96 0 160 0 0-320-72 0 0-72 0-24-48 0 0 24 0 72-40 0L480 0 288 0zm64 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm160 0l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M222 176c1-5 2-10 2-16c0-53-43-96-96-96c-54 0-96 43-96 96c0 6 0 11 1 16C13 190 0 214 0 240l0 80 96 0 0 160 0 32 32 0 32 0 0-32 0-160 96 0 0-80c0-26-14-50-34-64z" />
    </Icon>
);

export default TreeCity;