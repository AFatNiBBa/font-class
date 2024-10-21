
import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=thin play-pause}
 * @preview ![play-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/play-pause.svg)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 412.9c0 10.6 8.6 19.1 19.1 19.1c4.5 0 8.9-1.6 12.4-4.5l186-157.4c4.2-3.5 6.5-8.7 6.5-14.1s-2.4-10.6-6.5-14.1L111.5 84.5C108 81.6 103.7 80 99.1 80C88.6 80 80 88.6 80 99.1l0 313.7zm-16 0L64 99.1C64 79.7 79.7 64 99.1 64c8.3 0 16.3 2.9 22.7 8.3l186 157.4c7.7 6.6 12.2 16.2 12.2 26.3s-4.5 19.8-12.2 26.3l-186 157.4c-6.3 5.4-14.4 8.3-22.7 8.3C79.7 448 64 432.3 64 412.9zM432 72l0 368c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-368c0-4.4 3.6-8 8-8s8 3.6 8 8zm144 0l0 368c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-368c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default PlayPause;