
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-yen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-yen?s=sharp-duotone-solid circle-yen}
 * @preview ![circle-yen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-yen.svg)
 */
const CircleYen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM137.5 144c20.4 0 40.7 0 61 0c19.2 24.4 38.3 48.8 57.5 73.2c19.2-24.4 38.3-48.8 57.5-73.2c20.4 0 40.7 0 61 0c-3.9 4.9-7.8 9.9-11.7 14.8c-21.3 27.1-42.5 54.1-63.8 81.2c9.6 0 19.3 0 28.9 0c8 0 16 0 24 0l0 48c-8 0-16 0-24 0c-16 0-32 0-48 0c0 5.3 0 10.7 0 16c16 0 32 0 48 0c8 0 16 0 24 0l0 48-24 0-48 0c0 8.3 0 16.7 0 25c0 8 0 16 0 24c-16 0-32 0-48 0c0-8 0-16 0-24c0-8.3 0-16.7 0-25l-48 0-24 0c0-16 0-32 0-48c8 0 16 0 24 0c16 0 32 0 48 0c0-5.3 0-10.7 0-16c-16 0-32 0-48 0c-8 0-16 0-24 0c0-16 0-32 0-48c8 0 16 0 24 0c9.6 0 19.3 0 28.9 0c-21.3-27.1-42.5-54.1-63.8-81.2c-3.9-4.9-7.8-9.9-11.7-14.8z" />
        <path d="M149.1 158.8L137.5 144l61 0L256 217.2 313.5 144l61 0-11.7 14.8L299.1 240l28.9 0 24 0 0 48-24 0-48 0 0 16 48 0 24 0 0 48-24 0-48 0 0 25 0 24-48 0 0-24 0-25-48 0-24 0 0-48 24 0 48 0 0-16-48 0-24 0 0-48 24 0 28.9 0-63.8-81.2z" />
    </Icon>
);

export default CircleYen;