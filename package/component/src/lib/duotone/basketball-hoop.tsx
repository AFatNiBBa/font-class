
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basketball-hoop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basketball-hoop?s=duotone basketball-hoop}
 * @preview ![basketball-hoop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/basketball-hoop.svg)
 */
const BasketballHoop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 214.9L0 331.2c0 25.3 14.9 48.2 38 58.5l96.4 42.9L113.8 288l-1.8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-16 0-64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64 0 16 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-1.8 0L505.6 432.6 602 389.7c23.1-10.3 38-33.2 38-58.5l0-116.3c0-8.9-1.8-18.6-6.8-28C615.3 153.1 523.3 0 320 0S24.7 153.1 6.8 187C1.8 196.3 0 206 0 214.9zM192 160l0 64 0 16 256 0 0-16 0-64-256 0z" />
        <path d="M112 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l34.1 0 7.2 50.3 22.9 160c.9 6.1 5.2 11.2 11.1 13s12.3 .1 16.5-4.4L255.6 451l52.8 56c3 3.2 7.2 5 11.6 5s8.6-1.8 11.6-5l52.8-56 51.9 55.9c4.2 4.5 10.6 6.2 16.5 4.4s10.2-6.9 11.1-13l22.9-160 7.2-50.3 34.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-416 0zm349.6 48l-5.2 36.6-44-36.6 49.2 0zm-99.3 0l.6 .5L320 334.6l-42.8-46.1 .6-.5 84.4 0zm-134.5 0l-44 36.6L178.4 288l49.2 0zm159.8 21l48.7 40.5-51.6 54.7-42.7-46L387.5 309zm49.4 151.6l-30.5-32.9 41.5-44-11 76.8zM320 381.7l42.6 45.9L320 472.7l-42.6-45.2L320 381.7zm-21.8-23.5l-42.7 46-51.6-54.7L252.5 309l45.7 49.2zm-64.6 69.5l-30.5 32.9-11-76.8 41.5 44z" />
    </Icon>
);

export default BasketballHoop;