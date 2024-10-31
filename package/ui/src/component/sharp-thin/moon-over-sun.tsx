
import { Icon } from "../../index";

/**
 * A component that renders the `moon-over-sun` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=sharp-thin moon-over-sun}
 * @preview ![moon-over-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/moon-over-sun.svg)
 */
const MoonOverSun: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 57.1L164.3 7.7 150 0l-4.7 15.6-29.9 99.7L15.6 145.3 0 150l7.7 14.4L57.1 256 7.7 347.7 0 362l15.6 4.7 99.7 29.9 29.9 99.7L150 512l14.4-7.7L256 454.9l91.7 49.4L362 512l4.7-15.6 29.9-99.7 99.7-29.9L512 362l-7.7-14.4L454.9 256l49.4-91.7L512 150l-15.6-4.7-99.7-29.9L366.7 15.6 362 0 347.7 7.7 256 57.1zm96.3-33.7l29 96.6 2.5 8.3 8.3 2.5 96.6 29-47.8 88.8-4.1 7.6 4.1 7.6 47.8 88.8-96.6 29-8.3 2.5-2.5 8.3-29 96.6-88.8-47.8-7.6-4.1-7.6 4.1-88.8 47.8-29-96.6-2.5-8.3-8.3-2.5-96.6-29 47.8-88.8 4.1-7.6-4.1-7.6L23.4 159.6l96.6-29 8.3-2.5 2.5-8.3 29-96.6 88.8 47.8 7.6 4.1 7.6-4.1 88.8-47.8zM400 256a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM256 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 210c-45.3 0-82-36.7-82-82c0-40.2 28.9-73.6 67.1-80.6c-12.9 16.2-20.7 36.7-20.7 59c0 45.9 32.6 83.9 75.9 93.1C284.4 334.2 270.6 338 256 338zM236.4 234.4c0-24 10.8-45.4 27.7-60c5.9-5 12.5-9.2 19.7-12.4c-7.9-2.3-16.2-3.7-24.8-4c-1 0-2 0-3 0c-54.1 0-98 43.9-98 98s43.9 98 98 98c24.9 0 47.6-9.3 64.9-24.6c6.2-5.5 11.7-11.7 16.3-18.6c-6.7 1.8-13.7 2.7-20.9 2.7c-.6 0-1.2 0-1.9 0c-43.3-1-78.1-36-78.1-79.1z" />
    </Icon>
);

export default MoonOverSun;