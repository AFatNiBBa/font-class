
import { Icon, generic } from "../../index";

/**
 * A component that renders the `parachute-box` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/parachute-box?s=duotone parachute-box}
 * @preview ![parachute-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/parachute-box.svg)
 */
const ParachuteBox: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M24.9 192l43.2 0L188.3 324.2c6-2.7 12.7-4.2 19.7-4.2l32 0 0-128 32 0 0 128 32 0c7 0 13.7 1.5 19.7 4.2L443.8 192l43.2 0L346.8 346.3c3.3 6.5 5.2 13.9 5.2 21.7l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-7.8 1.9-15.2 5.2-21.7L24.9 192z" />
        <path d="M128.5 192l254.9 0c.3-5.3 .5-10.6 .5-16c0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4 .2 10.7 .5 16zM358.9 16.7C393.8 54.8 416 112.1 416 176c0 5.4-.2 10.7-.5 16l77.6 0c9.9 0 17.4-8.9 14.7-18.4C493.4 122.6 450 49.3 358.9 16.7zm-205.7 0C62 49.3 18.6 122.6 4.2 173.6C1.5 183.1 9 192 18.9 192l77.6 0c-.3-5.3-.5-10.6-.5-16c0-64 22.2-121.2 57.1-159.3z" />
    </Icon>
);

export default ParachuteBox;