
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=sharp-light arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 32l-16 0 0 32 16 0 89.4 0L256 233.4 86.6 64 176 64l16 0 0-32-16 0L48 32 32 32l0 16 0 128 0 16 32 0 0-16 0-89.4L233.4 256 64 425.4 64 336l0-16-32 0 0 16 0 128 0 16 16 0 128 0 16 0 0-32-16 0-89.4 0L256 278.6 425.4 448 336 448l-16 0 0 32 16 0 128 0 16 0 0-16 0-128 0-16-32 0 0 16 0 89.4L278.6 256 448 86.6l0 89.4 0 16 32 0 0-16 0-128 0-16-16 0L336 32z" />
    </Icon>
);

export default ArrowsMaximize;