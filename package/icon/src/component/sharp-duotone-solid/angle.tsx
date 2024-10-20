
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=sharp-duotone-solid angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M215.9 216.1c22.5 17.9 42.3 38.9 58.8 62.5l40.8-25.3c-21.1-30.7-47.1-57.8-76.8-80.2l-22.8 43zm75.7 89.6c13.3 24.2 23.3 50.5 29.4 78.3l49 0c-7-37-19.8-71.9-37.6-103.7l-40.8 25.3z" />
        <path d="M448 480L0 480l0-61.1L195.7 49l15-28.3 56.6 29.9L252.3 79 73.9 416 416 416l32 0 0 64z" />
    </Icon>
);

export default Angle;