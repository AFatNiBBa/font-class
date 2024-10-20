
import { Icon } from "../../index";

/**
 * A component that renders the `mountains` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=regular mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 424.1c0 4.4-3.5 7.9-7.9 7.9L55.9 432c-4.4 0-7.9-3.5-7.9-7.9c0-1.5 .4-2.9 1.2-4.2L256 90.3 462.8 419.9c.8 1.3 1.2 2.7 1.2 4.2zm-464 0C0 455 25 480 55.9 480l400.2 0 122.8 0c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 164.1 487.8 160 480 160s-15 4.1-19.1 10.7l-48.2 79L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 394.4C3 403.3 0 413.6 0 424.1z" />
    </Icon>
);

export default Mountains;