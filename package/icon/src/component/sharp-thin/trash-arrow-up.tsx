
import { Icon } from "../../index";

/**
 * A component that renders the `trash-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-arrow-up?s=sharp-thin trash-arrow-up}
 * @preview ![trash-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-arrow-up.svg)
 */
const TrashArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l-4.4 0-2.4 3.8L115.6 64 0 64 0 80l448 0 0-16L332.4 64 294.8 3.8 292.4 0 288 0 160 0zM313.6 64L134.4 64l30-48 119.1 0 30 48zM24 112l.1 .8 40 392 .7 7.2 7.2 0 304 0 7.2 0 .7-7.2 40-392 .1-.8L408 112 368.8 496 79.2 496 40 112 24 112zm200 64c-2.1 0-4.2 .8-5.7 2.3l-80 80-5.7 5.7L144 275.3l5.7-5.7L216 203.3 216 400l16 0 0-196.7 66.3 66.3 5.7 5.7L315.3 264l-5.7-5.7-80-80c-1.5-1.5-3.5-2.3-5.7-2.3z" />
    </Icon>
);

export default TrashArrowUp;