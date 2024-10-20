
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=thin arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l124.7 0L256 244.7 59.3 48 184 48c4.4 0 8-3.6 8-8s-3.6-8-8-8L40 32c-4.4 0-8 3.6-8 8l0 144c0 4.4 3.6 8 8 8s8-3.6 8-8L48 59.3 244.7 256 48 452.7 48 328c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 144c0 4.4 3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L59.3 464 256 267.3 452.7 464 328 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8l0-144c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 124.7L267.3 256 464 59.3 464 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-144c0-4.4-3.6-8-8-8L328 32z" />
    </Icon>
);

export default ArrowsMaximize;