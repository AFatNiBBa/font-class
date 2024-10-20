
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comma` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comma?s=duotone comma}
 * @preview ![comma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comma.svg)
 */
const Comma: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M160 350.4V349c0-33.7-27.3-61-61-61c-29.5 0-54.8 21.1-60.1 50.1l-22.2 122c-.5 2.6-.7 5.2-.7 7.9v8.2C16 495.9 32.1 512 51.9 512c12.5 0 24.1-6.5 30.6-17.2L150.8 383c6-9.8 9.2-21.1 9.2-32.6z" />
    </Icon>
);

export default Comma;