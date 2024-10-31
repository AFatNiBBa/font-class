
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowling-ball-pin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-ball-pin?s=sharp-duotone-solid bowling-ball-pin}
 * @preview ![bowling-ball-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowling-ball-pin.svg)
 */
const BowlingBallPin: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 220a28 28 0 1 0 56 0 28 28 0 1 0 -56 0zm72-48a28 28 0 1 0 56 0 28 28 0 1 0 -56 0zm0 88a28 28 0 1 0 56 0 28 28 0 1 0 -56 0zM404 442.5L423.9 512l112.3 0L576 368 524.9 209.6c-1.9-5.7-3.3-11.6-4.1-17.6l-81.7 0c-.8 6-2.2 11.9-4.1 17.6l-2.9 8.6C442.4 244.8 448 273.8 448 304c0 51.6-16.3 99.4-44 138.5zM416 64l0 1.1c0 7.4 1 14.8 2.9 22l17.7 64.8c.7 2.7 1.3 5.4 1.8 8.1l83.1 0c.5-2.7 1.1-5.4 1.8-8.1l17.7-64.8c2-7.2 2.9-14.6 2.9-22l0-1.1c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
        <path d="M0 304a208 208 0 1 1 416 0A208 208 0 1 1 0 304zM224 172a28 28 0 1 0 -56 0 28 28 0 1 0 56 0zM196 288a28 28 0 1 0 0-56 28 28 0 1 0 0 56zm-44-68a28 28 0 1 0 -56 0 28 28 0 1 0 56 0zm286.5-60l83.1 0c-1 5.7-1.5 11.4-1.5 17.1l0 2.1c0 4.3 .3 8.5 .9 12.8l-81.7 0c.6-4.2 .9-8.5 .9-12.8l0-2.1c0-5.8-.5-11.5-1.5-17.1z" />
    </Icon>
);

export default BowlingBallPin;