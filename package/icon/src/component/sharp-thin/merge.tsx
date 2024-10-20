
import { Icon } from "../../index";

/**
 * A component that renders the `merge` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=sharp-thin merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l8 0 88 0 64 0 4.2 0 2.4 3.4L292.2 248l184.5 0-66.3-66.3-5.7-5.7L416 164.7l5.7 5.7 80 80 5.7 5.7-5.7 5.7-80 80-5.7 5.7L404.7 336l5.7-5.7L476.7 264l-184.5 0L166.6 444.6l-2.4 3.4-4.2 0-64 0L8 448l-8 0 0-16 8 0 88 0 59.8 0L278.3 256 155.8 80 96 80 8 80 0 80 0 64z" />
    </Icon>
);

export default Merge;