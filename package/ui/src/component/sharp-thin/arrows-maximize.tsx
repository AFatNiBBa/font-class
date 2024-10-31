
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=sharp-thin arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 32l-8 0 0 16 8 0 124.7 0L256 244.7 59.3 48 184 48l8 0 0-16-8 0L40 32l-8 0 0 8 0 144 0 8 16 0 0-8L48 59.3 244.7 256 48 452.7 48 328l0-8-16 0 0 8 0 144 0 8 8 0 144 0 8 0 0-16-8 0L59.3 464 256 267.3 452.7 464 328 464l-8 0 0 16 8 0 144 0 8 0 0-8 0-144 0-8-16 0 0 8 0 124.7L267.3 256 464 59.3 464 184l0 8 16 0 0-8 0-144 0-8-8 0L328 32z" />
    </Icon>
);

export default ArrowsMaximize;