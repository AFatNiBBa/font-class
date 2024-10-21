
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=light semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 32 128a64 64 0 1 0 128 0zM128 350.4c0 5.6-1.5 11.1-4.5 15.9L55.4 477.9c-.8 1.3-2.3 2.1-3.8 2.1c-2.8 0-4.9-2.5-4.4-5.2L70.5 343.9C73 330.1 85 320 99 320c16 0 29 13 29 29l0 1.5zm32 0l0-1.5c0-33.7-27.3-61-61-61c-29.5 0-54.8 21.2-60 50.2L15.7 469.1c-4 22.3 13.2 42.9 35.9 42.9c12.7 0 24.5-6.6 31.1-17.4L150.8 383c6-9.8 9.2-21.1 9.2-32.6z" />
    </Icon>
);

export default Semicolon;