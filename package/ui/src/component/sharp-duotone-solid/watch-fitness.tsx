
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-fitness` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-fitness?s=sharp-duotone-solid watch-fitness}
 * @preview ![watch-fitness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/watch-fitness.svg)
 */
const WatchFitness: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l64 0 256 0 64 0 0 384-64 0L64 448 0 448 0 64zM80 219.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L192 352.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0C106.5 160 80 186.5 80 219.2z" />
        <path d="M64 0l0 64 256 0 0-64L64 0zm75.2 160C106.5 160 80 186.5 80 219.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L192 352.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0zM320 448L64 448l0 64 256 0 0-64z" />
    </Icon>
);

export default WatchFitness;