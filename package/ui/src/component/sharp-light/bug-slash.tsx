
import { Icon } from "../../index";

/**
 * A component that renders the `bug-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug-slash?s=sharp-light bug-slash}
 * @preview ![bug-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bug-slash.svg)
 */
const BugSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 304l16 0 0-32-16 0-80 0 0-80 0-9.4 59.3-59.3L550.6 112 528 89.4l-11.3 11.3L457.4 160l-9.4 0-146.3 0 40.5 32L448 192l0 80 0 3.5L484.1 304l75.9 0zM411.4 409.7c-19.7 20.1-46 33.7-75.4 37.4l0-96.8-32-25.3L304 447c-63.1-7.9-112-61.7-112-127l0-16 0-32 0-35.5-32-25.3 0 60.8-80 0-16 0 0 32 16 0 80 0 0 16c0 30.2 8.4 58.4 22.9 82.5l-74.2 74.2L97.4 488 120 510.6l11.3-11.3 71-71C231.5 460.1 273.4 480 320 480c46 0 87.4-19.4 116.6-50.4l-25.2-19.9zM224 98.7L261.2 128 384 128l32 0 0-32c0-53-43-96-96-96s-96 43-96 96l0 2.7zM320 32c35.3 0 64 28.7 64 64L256 96c0-35.3 28.7-64 64-64zM40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18z" />
    </Icon>
);

export default BugSlash;