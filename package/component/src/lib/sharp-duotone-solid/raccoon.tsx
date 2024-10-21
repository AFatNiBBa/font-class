
import { Icon, generic } from "../../index";

/**
 * A component that renders the `raccoon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raccoon?s=sharp-duotone-solid raccoon}
 * @preview ![raccoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/raccoon.svg)
 */
const Raccoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128l0 32 128 0 0-32L0 128zm0 96l0 32 112 0c5-6.7 10.4-13.1 16-19.2l0-12.8L0 224zm0 96l0 80c0 61.9 50.1 112 112 112l128 0 80 0 0-16c0-26.5-21.5-48-48-48l-32 0-16 0 0-32 16 0 32 0c44.2 0 80 35.8 80 80l0 16 24 0 40 0 64 0 0-16.4c-.2-26.3-21.6-47.6-48-47.6l-16 0c0-24 0-48 0-72l-6.4 4.8-12.8 9.6-19.2-25.6 12.8-9.6L448 312l0-9.3c0-19.7-7.2-38.5-20.1-53l-7.3 2.2-42 28L366.5 288 352 288l-32 0-14.5 0-12.1-8.1-42-28-68.9-20.7C130.1 269 96 330.5 96 400l0 16-32 0 0-16c0-28.1 4.8-55 13.7-80L0 320zM190.7 46.8l2.1 6.3 15.3 45.8L194 116.2l86.4-30.1c21.7-7.5 44 1.4 55.6 18.6c11.5-17.3 33.9-26.2 55.6-18.6c28.8 10 57.6 20 86.5 30.1L463.9 98.8l15.3-45.8 2.1-6.3-3-5.9-16-32L457.9 0 448 0 383.6 0 336 0 288.4 0 224 0l-9.9 0-4.4 8.8-16 32-3 5.9zM202 325.5L218.5 298l13.7 8.2 80 48 13.7 8.2L309.5 390l-13.7-8.2-80-48L202 325.5zM225.3 49.2L233.9 32l28.5 0L232 69.4l-6.7-20.2zm15.2 166c8.2 2.5 16.5 4.9 24.7 7.4l50 33.4 20.8 0 20.8 0 50-33.4 24.7-7.4c-26.1-13.9-52.2-27.8-78.2-41.7c-7.1-3.8-13-9.2-17.3-15.7c-4.3 6.5-10.2 11.9-17.3 15.7c-26.1 13.9-52.2 27.8-78.2 41.7zM360 232a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM409.6 32l28.5 0 8.6 17.2L440 69.4 409.6 32zm70.1 263.4l0 .8c.1-.4 0-.6 0-.8z" />
        <path d="M128 32L0 32l0 96 128 0 0-96zm0 128L0 160l0 64 128 0 0-64zm-16 96L0 256l0 64 77.7 0c8.2-23.2 19.8-44.7 34.3-64zm64-60.1l64.4 19.3 78.2-41.7c7.1-3.8 13-9.2 17.3-15.7c4.3 6.5 10.2 11.9 17.3 15.7l78.2 41.7L496 195.9l0-57.6-18-22.1L391.6 86.1c-21.7-7.5-44 1.4-55.6 18.6c-11.5-17.3-33.9-26.2-55.6-18.6L194 116.2l-18 22.1 0 57.6zM360 232a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM272 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Raccoon;