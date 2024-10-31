
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up?s=sharp-duotone-solid square-arrow-up}
 * @preview ![square-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-arrow-up.svg)
 */
const SquareArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM78.1 248c5.7-5.7 11.3-11.3 17-17L207 119l17-17 17 17c37.3 37.3 74.7 74.7 112 112c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-23.7-23.7-47.4-47.4-71-71c0 60.7 0 121.4 0 182.1c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-60.7 0-121.4 0-182.1c-23.7 23.7-47.4 47.4-71 71c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9z" />
        <path d="M224 102.1l17 17L353 231l17 17L336 281.9l-17-17-71-71L248 376l0 24-48 0 0-24 0-182.1-71 71-17 17L78.1 248l17-17L207 119l17-17z" />
    </Icon>
);

export default SquareArrowUp;