
import { Icon } from "../../index";

/**
 * A component that renders the `taxi` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=light taxi}
 * @preview ![taxi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/taxi.svg)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 48l0 16 128 0 0-16c0-8.8-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zM160 64l0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 16 .4 0c35.3 0 66.5 23.2 76.6 57l34.3 114.4 .4 1.3C492.6 253.2 512 284.3 512 320l0 96 0 16 0 16 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48L32 448l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-16 0-16 0-96c0-35.7 19.4-66.8 48.3-83.3l.4-1.3L83 121c10.2-33.8 41.3-57 76.6-57l.4 0zm-.4 32c-21.2 0-39.9 13.9-46 34.2L85.3 224.6c3.5-.4 7.1-.6 10.7-.6l320 0c3.6 0 7.2 .2 10.7 .6l-28.3-94.4c-6.1-20.3-24.8-34.2-46-34.2L159.6 96zM74.7 259.9l-.5-.1C49.6 268.7 32 292.3 32 320l0 96 448 0 0-96c0-27.7-17.6-51.3-42.3-60.2l-.5 .1-.1-.3c-6.6-2.3-13.8-3.6-21.2-3.6L96 256c-7.4 0-14.5 1.3-21.2 3.6l-.1 .3zM80 328a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Taxi;