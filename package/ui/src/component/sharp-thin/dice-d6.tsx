
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=sharp-thin dice-d6}
 * @preview ![dice-d6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dice-d6.svg)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M216 507.4l8 4.6 8-4.6L448 384l0-253.2 0-9.3-8.2-4.4L224 0 8.1 120.4 0 125l0 9.3L0 384 216 507.4zM16 374.7l0-231.1 200 117L216 489 16 374.7zm8.1-244.9l200-111.5L423.9 126.6l-200 120.1L24.1 129.8zM432 140.4l0 234.3L232 489l0-228.5L432 140.4z" />
    </Icon>
);

export default DiceD6;