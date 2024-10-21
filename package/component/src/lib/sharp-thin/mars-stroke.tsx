
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke?s=sharp-thin mars-stroke}
 * @preview ![mars-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mars-stroke.svg)
 */
const MarsStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376 0l-8 0 0 16 8 0 108.7 0L392 108.7 349.7 66.3 344 60.7 332.7 72l5.7 5.7L380.7 120l-50.3 50.3-3.7 3.7c-31.3-28.6-72.9-46-118.7-46c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-45.7-17.4-87.4-46-118.7l3.7-3.7L392 131.3l42.3 42.3 5.7 5.7L451.3 168l-5.7-5.7L403.3 120 496 27.3 496 136l0 8 16 0 0-8L512 8l0-8-8 0L376 0zM48 304a160 160 0 1 1 320 0A160 160 0 1 1 48 304z" />
    </Icon>
);

export default MarsStroke;