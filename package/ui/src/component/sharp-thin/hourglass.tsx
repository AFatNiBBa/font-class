
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=sharp-thin hourglass}
 * @preview ![hourglass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hourglass.svg)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 24 0 0 128 0 4 3.3 2.4L178.5 256 35.3 361.6 32 364l0 4 0 128L8 496l-8 0 0 16 8 0 368 0 8 0 0-16-8 0-24 0 0-128 0-4-3.3-2.4L205.5 256 348.7 150.4 352 148l0-4 0-128 24 0 8 0 0-16-8 0L8 0zM336 16l0 124L192 246.1 48 140 48 16l288 0zM192 265.9L336 372l0 124L48 496l0-124L192 265.9z" />
    </Icon>
);

export default Hourglass;