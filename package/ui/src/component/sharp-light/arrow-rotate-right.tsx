
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-rotate-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-right?s=sharp-light arrow-rotate-right}
 * @preview ![arrow-rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-rotate-right.svg)
 */
const ArrowRotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 192l16 0 0-16 0-128 0-16-32 0 0 16 0 92.6C408.8 75.5 337.5 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c86.4 0 161.4-49 198.8-120.6l-28.4-14.8C394.3 406.1 330.1 448 256 448C150 448 64 362 64 256S150 64 256 64c71 0 133.1 38.6 166.3 96L336 160l-16 0 0 32 16 0 128 0z" />
    </Icon>
);

export default ArrowRotateRight;