
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-half` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-half?s=sharp-thin hourglass-half}
 * @preview ![hourglass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hourglass-half.svg)
 */
const HourglassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 24 0 0 128 0 4 3.3 2.4L178.5 256 35.3 361.6 32 364l0 4 0 128L8 496l-8 0 0 16 8 0 368 0 8 0 0-16-8 0-24 0 0-128 0-4-3.3-2.4L205.5 256 348.7 150.4 352 148l0-4 0-128 24 0 8 0 0-16-8 0L8 0zM336 16l0 112L48 128 48 16l288 0zm-5.5 128L192 246.1 53.5 144l277 0zM192 265.9L336 372l0 44L48 416l0-44L192 265.9zM48 496l0-64 288 0 0 64L48 496z" />
    </Icon>
);

export default HourglassHalf;