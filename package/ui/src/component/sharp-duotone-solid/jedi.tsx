
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jedi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jedi?s=sharp-duotone-solid jedi}
 * @preview ![jedi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/jedi.svg)
 */
const Jedi: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 336l53.2 17.7-25.1 50.2 47.2-23.6L265.1 446c7.4 1.3 15.1 2 22.9 2c1 0 1.9 0 2.9 0s1.9-.1 2.9-.1c1.9-.1 3.9-.2 5.8-.4c3.8-.3 7.6-.9 11.3-1.5l-2.2-65.7 47.2 23.6-25.1-50.2L384 336l-53.2-17.7 25.1-50.2-50.1 25.1L296 0 280 0l-9.8 293.2-50.1-25.1 25.1 50.2L192 336z" />
        <path d="M448 88c0 57.3-30.2 107.6-75.5 135.9C399.2 247.3 416 281.7 416 320c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-38.3 16.8-72.7 43.5-96.1C158.2 195.6 128 145.3 128 88c0-30.5 8.5-59 23.3-83.2C86.4 42.6 38.5 106.5 22.2 182.2L64 224l-47.5 0c-.3 5.3-.5 10.6-.5 16c0 18.2 1.8 36 5.2 53.2L80 352l-39.9 0C82.7 446.4 177.7 512 288 512s205.3-65.6 247.9-160L496 352l58.8-58.8c3.4-17.2 5.2-35 5.2-53.2c0-5.4-.2-10.7-.5-16L512 224l41.8-41.8C537.5 106.5 489.6 42.6 424.7 4.8C439.5 29 448 57.5 448 88z" />
    </Icon>
);

export default Jedi;