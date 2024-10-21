
import { Icon } from "../../index";

/**
 * A component that renders the `pen-swirl` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-swirl?s=sharp-thin pen-swirl}
 * @preview ![pen-swirl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen-swirl.svg)
 */
const PenSwirl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M442.3 143l47-47L416 22.6l-47 47L442.3 143zM352 64l5.7-5.7 47-47L416 0l11.3 11.3 73.4 73.4L512 96l-11.3 11.3-47 47L448 160l-5.7 5.7L288 320 177.6 347.6 160 352l4.4-17.6L192 224 346.3 69.7 352 64zm5.7 17L206.4 232.2 182 330l97.8-24.5L431 154.3 357.7 81zM472 256c0-22.6-3.5-44.4-9.9-64.8l8.5-8.5 4.1-4.1c8.6 24.2 13.3 50.3 13.3 77.5c0 75.1-60.9 136-136 136c-18 0-35.2-3.5-51-9.9c-4.1-1.7-6.1-6.3-4.4-10.4s6.3-6.1 10.4-4.4c13.9 5.6 29.1 8.7 45 8.7c66.3 0 120-53.7 120-120zM256 24c27.2 0 53.3 4.7 77.5 13.3l-4.1 4.1-8.5 8.5C300.4 43.5 278.6 40 256 40C136.7 40 40 136.7 40 256s96.7 216 216 216c4.4 0 8 3.6 8 8s-3.6 8-8 8C127.9 488 24 384.1 24 256S127.9 24 256 24z" />
    </Icon>
);

export default PenSwirl;