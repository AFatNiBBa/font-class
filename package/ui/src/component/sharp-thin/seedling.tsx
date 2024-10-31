
import { Icon } from "../../index";

/**
 * A component that renders the `seedling` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=sharp-thin seedling}
 * @preview ![seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/seedling.svg)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 16l0 16c0 102.9-74.7 188.4-172.9 205.1c1 5.2 1.9 10.5 2.6 15.8C431.4 234.9 512 142.9 512 32l0-16 0-16L496 0 448 0C367 0 296 43 256.6 107.5c3.8 4.1 7.5 8.3 11.1 12.6C303.7 57.9 371 16 448 16l48 0zM64 80c114.9 0 208 93.1 208 208l0 16-48 0C109.1 304 16 210.9 16 96l0-16 48 0zM224 320l48 0 0 184 0 8 16 0 0-8 0-184 0-8 0-8 0-16C288 164.3 187.7 64 64 64L16 64 0 64 0 80 0 96C0 219.7 100.3 320 224 320z" />
    </Icon>
);

export default Seedling;