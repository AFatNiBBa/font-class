
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-9` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-9?s=sharp-duotone-solid square-9}
 * @preview ![square-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-9.svg)
 */
const Square_9: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM128 224c0 49.2 37 89.8 84.7 95.3l-44.4 48.4L153.4 384l65.1 0 68.1-74.3c21.4-23.4 33.3-54 33.3-85.7c0-53-43-96-96-96s-96 43-96 96zm144 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M272 224a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-59.3 95.3l-44.4 48.4L153.4 384l65.1 0 68.1-74.3c21.4-23.4 33.3-54 33.3-85.7c0-53-43-96-96-96s-96 43-96 96c0 49.2 37 89.8 84.7 95.3z" />
    </Icon>
);

export default Square_9;