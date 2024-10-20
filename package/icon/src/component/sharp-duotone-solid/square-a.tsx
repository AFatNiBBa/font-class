
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-a` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a?s=sharp-duotone-solid square-a}
 * @preview ![square-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-a.svg)
 */
const SquareA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM88.6 384c37.9-80.7 75.8-161.5 113.6-242.2c2.2-4.6 4.3-9.2 6.5-13.8l30.5 0c2.2 4.6 4.3 9.2 6.5 13.8c37.9 80.7 75.8 161.4 113.6 242.2l-53 0-22.5-48-119.7 0-22.5 48-53 0zm98.1-96l74.6 0c-12.4-26.5-24.9-53-37.3-79.5c-12.4 26.5-24.9 53-37.3 79.5z" />
        <path d="M239.2 128l-30.5 0-6.5 13.8L88.6 384l53 0 22.5-48 119.7 0 22.5 48 53 0L245.7 141.8 239.2 128zm22.1 160l-74.6 0L224 208.5 261.3 288z" />
    </Icon>
);

export default SquareA;