
import { Icon } from "../../index";

/**
 * A component that renders the `circle-small` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=sharp-regular circle-small}
 * @preview ![circle-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-small.svg)
 */
const CircleSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 272a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CircleSmall;