
import { Icon } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=sharp-light circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 256c0-53 43-96 96-96s96 43 96 96c0 20.8-6.6 40.1-17.9 55.8L284.5 256l-42.8 0 2.3 2.6 67.4 75.8C295.7 345.5 276.6 352 256 352c-53 0-96-43-96-96zm224 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128c28.8 0 55.4-9.5 76.8-25.6L355.5 384l42.8 0-2.3-2.6-40.2-45.2C373.4 314.2 384 286.4 384 256z" />
    </Icon>
);

export default CircleQ;