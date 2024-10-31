
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trumpet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trumpet?s=duotone trumpet}
 * @preview ![trumpet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trumpet.svg)
 */
const Trumpet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 320c0 70.7 57.3 128 128 128l96 0 96 0c70.7 0 128-57.3 128-128l0-36.5c-19.7-12-41.3-21.4-64-25.4l0 61.8c0 29.8-20.4 54.9-48 62l0-126c-16 0-32 0-48 0l0 128-40 0 0-128c-16 0-32 0-48 0l0 128-40 0 0-128c-47.6 0-95.2 0-142.9 0C70.2 274.8 64 296.7 64 320zm64 0c0-29.8 20.4-54.9 48-62l0 124c-27.6-7.1-48-32.2-48-62zm48-160l0 32 48.1 0c-.1-10.7-.1-21.3-.1-32c0-13.3-10.7-24-24-24s-24 10.7-24 24zm88 0l0 32 48 0 0-32c0-13.3-10.7-24-24-24s-24 10.7-24 24zm88 0l0 32 48 0 0-32c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M640 80c0-7-4.6-13.2-11.3-15.3s-14 .4-17.9 6.2c0 0 0 0 0 0c0 0 0 0 0 0l-.1 .2-.7 .9c-.6 .8-1.5 2.1-2.8 3.8c-2.5 3.3-6.2 8.1-11 13.9c-9.6 11.6-23.6 26.9-40.8 42.3c-35 31.1-81.3 60-131.4 60L46.6 192c-3.3-9.3-12.2-16-22.6-16c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24c10.4 0 19.3-6.7 22.6-16L424 256c50.1 0 96.4 28.8 131.4 60c17.3 15.3 31.2 30.7 40.8 42.3c4.8 5.8 8.5 10.6 11 13.9c1.2 1.7 2.2 2.9 2.8 3.8l.7 .9 .1 .2c0 0 0 0 0 0c0 0 0 0 0 0c4 5.8 11.2 8.3 17.9 6.2s11.3-8.3 11.3-15.3l0-288z" />
    </Icon>
);

export default Trumpet;