
import { Icon } from "../../index";

/**
 * A component that renders the `vials` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=light vials}
 * @preview ![vials](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/vials.svg)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l16 0 0 208 0 128c0 44.2 35.8 80 80 80s80-35.8 80-80l0-128 0-208 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0L48 32 16 32zM64 256L64 64l96 0 0 192-96 0zm0 32l96 0 0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112zM304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 208 0 128c0 44.2 35.8 80 80 80s80-35.8 80-80l0-128 0-208 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0L336 32l-32 0zm48 224l0-192 96 0 0 192-96 0zm0 32l96 0 0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112z" />
    </Icon>
);

export default Vials;