
import { Icon } from "../../index";

/**
 * A component that renders the `hotdog` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotdog?s=sharp-regular hotdog}
 * @preview ![hotdog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hotdog.svg)
 */
const Hotdog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M449.9 129.9l-320 320c-18.7 18.7-49.1 18.7-67.9 0s-18.7-49.1 0-67.9l320-320c18.7-18.7 49.1-18.7 67.9 0s18.7 49.1 0 67.9zm33.9 33.9c37.5-37.5 37.5-98.3 0-135.8s-98.3-37.5-135.8 0l-320 320c-37.5 37.5-37.5 98.3 0 135.8s98.3 37.5 135.8 0l320-320zm-6.5 57.5l-256 256L256 512 512 256l-34.7-34.7zM34.7 290.7l256-256L256 0 0 256l34.7 34.7zm371.8-140l14.6-6.5-13-29.2-14.6 6.5-72 32-4.9 2.2-2.6 4.7-37.6 67.7-59.6 29.8-4.4 2.2-2.4 4.3-37.8 68-68 37.8-14 7.8 15.5 28 14-7.8 72-40 4-2.2 2.2-4 37.6-67.7 59.6-29.8 4.4-2.2 2.4-4.3 37.4-67.3 67.1-29.8z" />
    </Icon>
);

export default Hotdog;