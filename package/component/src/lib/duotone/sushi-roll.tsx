
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sushi-roll` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sushi-roll?s=duotone sushi-roll}
 * @preview ![sushi-roll](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sushi-roll.svg)
 */
const SushiRoll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M81.1 172.8c9.2 7.3 21.8 13.8 36.9 19.1c14.8-14.8 32.8-26.7 51.4-36.1c20.5-10.3 40.9-17 56.9-20.8c18.2 27.3 46.6 49.9 82 63.4c26.1-6.5 47.2-15.9 60.4-27c-69.5-5.5-113.5-48.4-122.8-90.8c-7.1-.4-14.4-.6-21.8-.6c-6.4 0-12.7 .1-18.9 .4c.8 6 2.1 11.9 3.8 17.7c-17.3 4.7-37.4 11.8-57.5 21.9c-24.5 12.3-49.9 29.4-70.3 52.7z" />
        <path d="M448 368l0-224C448 82.1 347.7 32 224 32S0 82.1 0 144L0 368c0 61.9 100.3 112 224 112s224-50.1 224-112zM224 208c-88.4 0-160-28.7-160-64s71.6-64 160-64s160 28.7 160 64s-71.6 64-160 64z" />
    </Icon>
);

export default SushiRoll;