
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down?s=sharp-duotone-solid square-arrow-down}
 * @preview ![square-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-arrow-down.svg)
 */
const SquareArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM78.1 264L112 230.1l17 17c23.7 23.7 47.3 47.3 71 71c0-60.7 0-121.4 0-182.1c0-8 0-16 0-24c16 0 32 0 48 0c0 8 0 16 0 24c0 60.7 0 121.4 0 182.1c23.7-23.7 47.3-47.3 71-71c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-37.3 37.3-74.7 74.7-112 112c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-37.3-37.3-74.7-74.7-112-112c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M224 409.9l17-17L353 281l17-17L336 230.1l-17 17-71 71L248 136l0-24-48 0 0 24 0 182.1-71-71-17-17L78.1 264l17 17L207 393l17 17z" />
    </Icon>
);

export default SquareArrowDown;