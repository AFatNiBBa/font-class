
import { Icon } from "../../index";

/**
 * A component that renders the `music-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-slash?s=thin music-slash}
 * @preview ![music-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/music-slash.svg)
 */
const MusicSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M364.1 199.1L560 138.8l0 184.9c-17.2-21.6-46.6-35.8-80-35.8c-1.1 0-2.1 0-3.2 0l22.5 17.8c29.2 5.7 50.6 24.2 57.9 45.7L576 366.4l0-238.2 0-.4L576 15c0-8.3-6.7-15-15-15c-1.5 0-3 .2-4.4 .7L256.9 92.9c-5.9 1.8-10.7 5.8-13.7 10.8l12.9 10.2c.7-2.7 2.7-4.9 5.4-5.7L560 16.4l0 105.7-211.1 65 15.3 12zM240 284.6l0 103.2c-17.2-21.6-46.6-35.8-80-35.8c-53 0-96 35.8-96 80s43 80 96 80s96-35.8 96-80l0-134.8-16-12.6zM160 368c47 0 80 31.3 80 64s-33 64-80 64s-80-31.3-80-64s33-64 80-64zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default MusicSlash;