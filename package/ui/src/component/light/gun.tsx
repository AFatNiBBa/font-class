
import { Icon } from "../../index";

/**
 * A component that renders the `gun` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=light gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 32c8.8 0 16 7.2 16 16l0 16 32 0c17.7 0 32 14.3 32 32l0 80c0 17.7-14.3 32-32 32l-57.4 0L464 230.6c-6 6-14.1 9.4-22.6 9.4l-46.1 0-28.6 80.1c-6.8 19.1-24.9 31.9-45.2 31.9L233 352 207 455.8C203.5 470 190.7 480 176 480L64 480c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5L73.1 279.8c5-20.2-10.2-39.8-31-39.8l-10 0c-17.7 0-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64l448 0 0-16c0-8.8 7.2-16 16-16zM241 320l80.5 0c6.8 0 12.8-4.3 15.1-10.6L361.3 240 261 240l-20 80zM32 96l0 112 10 0 15.2 0L235 208l1 0 14.9 0 16.1 0 174.3 0L464 185.4c6-6 14.1-9.4 22.6-9.4l57.4 0 0-80-48 0L32 96zM228 240L97.5 240c8 13.7 10.9 30.5 6.7 47.5L64 448l112 0 52-208z" />
    </Icon>
);

export default Gun;