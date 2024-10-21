
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=solid box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default BoxArchive;