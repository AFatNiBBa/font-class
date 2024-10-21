
import { Icon } from "../../index";

/**
 * A component that renders the `person-burst` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-burst?s=sharp-thin person-burst}
 * @preview ![person-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-burst.svg)
 */
const PersonBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M184.8 19.2l32.6 70.9 75.7-18.7 20.5-5.1-9.5 18.8L269 154.8l61.9 47.5 16.7 12.8L327 219.5l-76.4 16 1.4 78 .4 21.1-16.2-13.4L176 271.4l-60.1 49.7L99.6 334.6l.4-21.1 1.4-78L25 219.5 4.4 215.2l16.7-12.8L83 154.8 47.9 85.1 38.4 66.3l20.5 5.1 75.7 18.7 32.6-70.9L176 0l8.8 19.2zm36.4 86.4l-12.9 3.2-5.5-12L176 38.3 149.1 96.7l-5.5 12-12.9-3.2L68.4 90.2l28.9 57.4 6 11.8-10.5 8.1-51 39.2 62.9 13.2 13 2.7-.2 13.2-1.2 64.3 49.5-41 10.2-8.4 10.2 8.4 49.5 41-1.2-64.3-.2-13.2 13-2.7 62.9-13.2-51-39.2-10.5-8.1 6-11.8 28.9-57.4-62.4 15.4zM520 56a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-96 0a56 56 0 1 1 112 0A56 56 0 1 1 424 56zm-3.1 72l118.2 0 5 0 2.2 4.5 84.9 176 3.5 7.2-14.4 7-3.5-7.2L534.1 144l-108.1 0L343.2 315.5l-3.5 7.2-14.4-7 3.5-7.2 84.9-176 2.2-4.5 5 0zM424 240l0 8 0 248 32 0 0-152 0-8 8 0 32 0 8 0 0 8 0 152 32 0 0-248 0-8 16 0 0 8 0 256 0 8-8 0-48 0-8 0 0-8 0-152-16 0 0 152 0 8-8 0-48 0-8 0 0-8 0-256 0-8 16 0z" />
    </Icon>
);

export default PersonBurst;