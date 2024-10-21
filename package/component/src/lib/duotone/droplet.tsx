
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=duotone droplet}
 * @preview ![droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/droplet.svg)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320zm64 16c0-8.8 7.2-16 16-16s16 7.2 16 16c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112z" />
        <path d="M80 320c8.8 0 16 7.2 16 16c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Droplet;