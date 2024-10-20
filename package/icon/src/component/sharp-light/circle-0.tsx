
import { Icon } from "../../index";

/**
 * A component that renders the `circle-0` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-0?s=sharp-light circle-0}
 * @preview ![circle-0](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-0.svg)
 */
const Circle_0: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-53 0-96 43-96 96l0 64c0 53 43 96 96 96s96-43 96-96l0-64c0-53-43-96-96-96zm-64 96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-64z" />
    </Icon>
);

export default Circle_0;