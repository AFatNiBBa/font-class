
import { Icon } from "../../index";

/**
 * A component that renders the `tree-city` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-city?s=sharp-solid tree-city}
 * @preview ![tree-city](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tree-city.svg)
 */
const TreeCity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 0L480 0l0 192 40 0 0-72 0-24 48 0 0 24 0 72 72 0 0 320-160 0-96 0-96 0L288 0zm64 64l0 64 64 0 0-64-64 0zm64 96l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zm224 0l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zM224 160c0 6-1 11-2 16c20 14 34 38 34 64l0 80-80 0-16 0 0 160 0 32-32 0-32 0 0-32 0-160-16 0L0 320l0-80c0-26 13-50 33-64c-1-5-1-10-1-16c0-53 42-96 96-96c53 0 96 43 96 96z" />
    </Icon>
);

export default TreeCity;