
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-start` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-start?s=sharp-thin hourglass-start}
 * @preview ![hourglass-start](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hourglass-start.svg)
 */
const HourglassStart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L8 0 376 0l8 0 0 16-8 0-24 0 0 128 0 4-3.3 2.4L205.5 256 348.7 361.6 352 364l0 4 0 128 24 0 8 0 0 16-8 0L8 512l-8 0 0-16 8 0 24 0 0-128 0-4 3.3-2.4L178.5 256 35.3 150.4 32 148l0-4L32 16 8 16 0 16 0 0zM48 16l0 48 288 0 0-48L48 16zm0 64l0 60L192 246.1 336 140l0-60L48 80zm0 292l0 124 288 0 0-124L192 265.9 48 372z" />
    </Icon>
);

export default HourglassStart;