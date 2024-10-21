
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volcano` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=duotone volcano}
 * @preview ![volcano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/volcano.svg)
 */
const Volcano: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 459.8C0 488.6 23.4 512 52.2 512l407.7 0c28.8 0 52.2-23.4 52.2-52.2c0-12.8-4.7-25.1-13.2-34.7l-99.6-112L362 369c-6.3 9.4-16.8 15-28 15c-8.9 0-17.5-3.6-23.8-9.9c-11.5-11.5-23-23-34.5-34.5C263.1 327.1 246 320 228.3 320c-13.2 0-26.1 3.9-37.1 11.2l-17.8 11.9c-8.7 5.8-18.9 8.9-29.3 8.9s-20.6-3.1-29.3-8.9c-6-4-12-8-17.9-12l-83.6 94C4.7 434.7 0 447.1 0 459.8z" />
        <path d="M160 144c14.7 0 28.3-5 39.1-13.3l32 48C236.7 187 246 192 256 192s19.3-5 24.9-13.3l32-48C323.7 139 337.3 144 352 144c35.3 0 64-28.7 64-64s-28.7-64-64-64c-15.7 0-30 5.6-41.2 15C299.6 12.4 279.3 0 256 0s-43.6 12.4-54.8 31C190 21.6 175.7 16 160 16c-35.3 0-64 28.7-64 64s28.7 64 64 64zm31.1 187.2c11-7.3 23.9-11.2 37.1-11.2c17.8 0 34.8 7.1 47.3 19.6l34.5 34.5c6.3 6.3 14.9 9.9 23.8 9.9c11.3 0 21.8-5.6 28-15l37.2-55.8-50.6-56.9c-18.2-20.5-44.3-32.2-71.8-32.2l-41.8 0c-27.4 0-53.5 11.7-71.8 32.2L96.7 331.2l17.9 12c8.7 5.8 18.9 8.9 29.3 8.9s20.6-3.1 29.3-8.9l17.8-11.9z" />
    </Icon>
);

export default Volcano;