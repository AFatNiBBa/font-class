
import { Icon } from "../../index";

/**
 * A component that renders the `5` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/5?s=sharp-thin 5}
 * @preview ![5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/5.svg)
 */
const $5: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M49.7 32L56 32l224 0 8 0 0 16-8 0L62.4 48 21.3 224 192 224c70.7 0 128 57.3 128 128s-57.3 128-128 128l-91.3 0C60.5 480 24 456.9 6.7 420.6l-4.4-9.2 14.5-6.9 4.4 9.2C35.8 444.4 66.7 464 100.7 464l91.3 0c61.9 0 112-50.1 112-112s-50.1-112-112-112L11.2 240 1.1 240l2.3-9.8 44.8-192L49.7 32z" />
    </Icon>
);

export default $5;