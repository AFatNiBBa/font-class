
import { Icon } from "../../index";

/**
 * A component that renders the `skull-cow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-cow?s=sharp-solid skull-cow}
 * @preview ![skull-cow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/skull-cow.svg)
 */
const SkullCow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 95.5C0 166.1 57.2 224 128 224l0-96-23 0c-28.7 0-52.7-21.7-55.6-50.3c-1.6-16 5.3-35.5 11.1-51.8C61.8 22.4 63 19.1 64 16L40 0C19 26.2 0 61 0 95.5zM512 224c70.8 0 128-57.9 128-128.5C640 61 621 26.2 600 0L576 16c1 3.1 2.2 6.4 3.4 9.9c0 0 0 0 0 0c5.8 16.4 12.7 35.8 11.1 51.8C587.7 106.3 563.7 128 535 128l-23 0 0 96zM480 96L160 96l0 272 60 0 36 144 128 0 36-144 60 0 0-272zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default SkullCow;