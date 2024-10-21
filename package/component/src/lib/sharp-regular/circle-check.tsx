
import { Icon } from "../../index";

/**
 * A component that renders the `circle-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=sharp-regular circle-check}
 * @preview ![circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-check.svg)
 */
const CircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209l17-17L352 158.1l-17 17-111 111-47-47-17-17L126.1 256l17 17 64 64 17 17 17-17L369 209z" />
    </Icon>
);

export default CircleCheck;