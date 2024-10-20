
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skull-cow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-cow?s=sharp-duotone-solid skull-cow}
 * @preview ![skull-cow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/skull-cow.svg)
 */
const SkullCow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 95.5C0 61 19 26.2 40 0L64 16c-1 3.1-2.2 6.4-3.4 9.9C54.8 42.2 47.8 61.7 49.4 77.7C52.3 106.3 76.3 128 105 128c7.7 0 15.3 0 23 0l32 0 0 96c-10.7 0-21.3 0-32 0C57.2 224 0 166.1 0 95.5zM480 128c10.7 0 21.3 0 32 0l23 0c28.7 0 52.7-21.7 55.6-50.3c1.6-16-5.3-35.5-11.1-51.8c-1.2-3.4-2.4-6.7-3.4-9.9L600 0c21 26.2 40 61 40 95.5C640 166.1 582.8 224 512 224l-32 0 0-96z" />
        <path d="M480 96L160 96l0 272 60 0 36 144 128 0 36-144 60 0 0-272zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default SkullCow;