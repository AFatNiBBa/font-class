
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage-car` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage-car?s=sharp-duotone-solid garage-car}
 * @preview ![garage-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/garage-car.svg)
 */
const GarageCar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 363.5l0 4.5 0 24 0 24 0 64 0 32 64 0 0-32 0-16 192 0 0 16 0 32 64 0 0-32 0-64 0-24 0-25.8 0-4.5-1.7-4.2-40-102.2-6-15.3L416 240l-192 0-16.5 0-5.9 15.4-40 104-1.6 4.2zM264 400a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-42-64l18.5-48 159.1 0 18.8 48L222 336zm202 64a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M0 128V512H96V192H544V512h96V128L320 0 0 128z" />
    </Icon>
);

export default GarageCar;