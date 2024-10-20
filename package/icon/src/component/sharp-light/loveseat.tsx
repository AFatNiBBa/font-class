
import { Icon } from "../../index";

/**
 * A component that renders the `loveseat` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loveseat?s=sharp-light loveseat}
 * @preview ![loveseat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/loveseat.svg)
 */
const Loveseat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 64L96 64l0 128-32 0L64 64l0-32 32 0 320 0 32 0 0 32 0 128-32 0 0-128zM32 448l64 0 0-32 0-96 0-32 0-32-64 0 0 192zm96-192l0 32 256 0 0-32 0-32 32 0 64 0 32 0 0 32 0 192 0 32-32 0-64 0-32 0 0-32-256 0 0 32-32 0-64 0L0 480l0-32L0 256l0-32 32 0 64 0 32 0 0 32zm0 160l256 0 0-96-256 0 0 96zm288 0l0 32 64 0 0-192-64 0 0 32 0 32 0 96z" />
    </Icon>
);

export default Loveseat;