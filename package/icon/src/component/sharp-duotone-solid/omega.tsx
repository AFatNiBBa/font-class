
import { Icon, generic } from "../../index";

/**
 * A component that renders the `omega` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=sharp-duotone-solid omega}
 * @preview ![omega](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/omega.svg)
 */
const Omega: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 96C135.6 96 64 167.6 64 256c0 59.2 32.1 110.9 80 138.6l16 9.2 0 18.5 0 25.7 0 32-32 0-96 0L0 480l0-64 32 0 35.2 0C25.8 375.4 0 318.7 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 62.7-25.8 119.4-67.2 160l35.2 0 32 0 0 64-32 0-96 0-32 0 0-32 0-25.7 0-18.5 16-9.2c47.9-27.7 80-79.4 80-138.6c0-88.4-71.6-160-160-160z" />
    </Icon>
);

export default Omega;