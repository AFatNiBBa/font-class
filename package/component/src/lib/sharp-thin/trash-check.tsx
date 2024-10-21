
import { Icon } from "../../index";

/**
 * A component that renders the `trash-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-check?s=sharp-thin trash-check}
 * @preview ![trash-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-check.svg)
 */
const TrashCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l-4.4 0-2.4 3.8L115.6 64 0 64 0 80l448 0 0-16L332.4 64 294.8 3.8 292.4 0 288 0 160 0zM313.6 64L134.4 64l30-48 119.1 0 30 48zM24 112l.1 .8 40 392 .7 7.2 7.2 0 304 0 7.2 0 .7-7.2 40-392 .1-.8L408 112 368.8 496 79.2 496 40 112 24 112zM325.7 229.7l5.7-5.7L320 212.7l-5.7 5.7L192 340.7l-58.3-58.3-5.7-5.7L116.7 288l5.7 5.7 64 64 5.7 5.7 5.7-5.7 128-128z" />
    </Icon>
);

export default TrashCheck;