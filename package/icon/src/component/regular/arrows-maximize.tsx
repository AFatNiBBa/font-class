
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=regular arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l70.1 0L256 222.1 113.9 80 184 80c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 32C42.7 32 32 42.7 32 56l0 128c0 13.3 10.7 24 24 24s24-10.7 24-24l0-70.1L222.1 256 80 398.1 80 328c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 128c0 13.3 10.7 24 24 24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-70.1 0L256 289.9 398.1 432 328 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0c13.3 0 24-10.7 24-24l0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 70.1L289.9 256 432 113.9l0 70.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-128c0-13.3-10.7-24-24-24L328 32z" />
    </Icon>
);

export default ArrowsMaximize;