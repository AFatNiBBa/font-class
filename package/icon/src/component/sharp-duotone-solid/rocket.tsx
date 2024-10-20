
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rocket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=sharp-duotone-solid rocket}
 * @preview ![rocket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rocket.svg)
 */
const Rocket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 287.6L80 128l120 0c-26.5 43.8-53.3 112.6-70.2 159.9L0 287.6zm224 93.1c47.7-16.5 116.3-42.5 160-68.8l0 120L224 512l0-131.2z" />
        <path d="M170.1 398.4l-58.2-58.2s49.4-155.9 95.3-223.5C296.6-15.1 433.7-7.9 502.7 9.3c17.2 68.9 24.5 206-107.4 295.4c-67.9 46-225.2 93.7-225.2 93.7zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Rocket;