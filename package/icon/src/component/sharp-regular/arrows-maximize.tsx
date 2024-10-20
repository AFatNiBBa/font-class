
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=sharp-regular arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 32l-24 0 0 48 24 0 70.1 0L256 222.1 113.9 80 184 80l24 0 0-48-24 0L56 32 32 32l0 24 0 128 0 24 48 0 0-24 0-70.1L222.1 256 80 398.1 80 328l0-24-48 0 0 24 0 128 0 24 24 0 128 0 24 0 0-48-24 0-70.1 0L256 289.9 398.1 432 328 432l-24 0 0 48 24 0 128 0 24 0 0-24 0-128 0-24-48 0 0 24 0 70.1L289.9 256 432 113.9l0 70.1 0 24 48 0 0-24 0-128 0-24-24 0L328 32z" />
    </Icon>
);

export default ArrowsMaximize;