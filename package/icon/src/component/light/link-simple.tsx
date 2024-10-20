
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=light link-simple}
 * @preview ![link-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/link-simple.svg)
 */
const LinkSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 256C0 167.6 71.6 96 160 96l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0C89.3 128 32 185.3 32 256s57.3 128 128 128l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c88.4 0 160 71.6 160 160zM152 240l272 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-272 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default LinkSimple;