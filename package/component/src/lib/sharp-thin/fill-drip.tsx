
import { Icon } from "../../index";

/**
 * A component that renders the `fill-drip` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill-drip?s=sharp-thin fill-drip}
 * @preview ![fill-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/fill-drip.svg)
 */
const FillDrip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 272l11.3 11.3L32 304s0 0 0 0s0 0 0 0L228.7 500.7 240 512l11.3-11.3L500.7 251.3 512 240l-11.3-11.3L283.3 11.3 272 0 260.7 11.3l-103 103-104-104L48 4.7 36.7 16l5.7 5.7 104 104-135 135L0 272zM240 489.4L54.6 304l370.7 0L240 489.4zM38.6 288l-16-16 135-135 84.7 84.7 5.7 5.7L259.3 216l-5.7-5.7L169 125.7l103-103L489.4 240l-48 48L38.6 288zM470.2 425.4L512 352.2l41.8 73.1c4.1 7.1 6.2 15.2 6.2 23.4c0 26.1-21.1 47.2-47.2 47.2l-1.6 0c-26.1 0-47.2-21.1-47.2-47.2c0-8.2 2.1-16.3 6.2-23.4zm-13.9-7.9c-5.5 9.6-8.3 20.4-8.3 31.4c0 34.9 28.3 63.2 63.2 63.2l1.6 0c34.9 0 63.2-28.3 63.2-63.2c0-11-2.9-21.8-8.3-31.4l-46.5-81.3L512 320l-9.2 16.1-46.5 81.3z" />
    </Icon>
);

export default FillDrip;