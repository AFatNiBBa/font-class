
import { Icon } from "../../index";

/**
 * A component that renders the `starship` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=sharp-light starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64l16 0 224 0 16 0 0 16 0 64 0 16-16 0-78.8 0 47.6 34.6 60.1-8.2C296.8 114.8 366.5 64 448 64c106 0 192 86 192 192s-86 192-192 192c-81.5 0-151.2-50.8-179-122.4l-60.1-8.2L161.2 352l78.8 0 16 0 0 16 0 64 0 16-16 0L16 448 0 448l0-16 0-64 0-16 16 0 90.8 0L163 311.1l-53.2-7.3L96 302l0-14 0-64 0-14 13.8-1.9 53.2-7.3L106.8 160 16 160 0 160l0-16L0 80 0 64zM32 96l0 32 192 0 0-32L32 96zm96 142l0 36.1 131.4 17.9c-2.2-11.6-3.4-23.7-3.4-35.9s1.2-24.3 3.4-35.9L128 238zM32 416l192 0 0-32L32 384l0 32zm416 0a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm32-160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Starship;