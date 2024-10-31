
import { Icon } from "../../index";

/**
 * A component that renders the `d` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=light d}
 * @preview ![d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/d.svg)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 64c-8.8 0-16 7.2-16 16l0 352c0 8.8 7.2 16 16 16l112 0c106 0 192-86 192-192s-86-192-192-192L48 64zM0 80C0 53.5 21.5 32 48 32l112 0c123.7 0 224 100.3 224 224s-100.3 224-224 224L48 480c-26.5 0-48-21.5-48-48L0 80z" />
    </Icon>
);

export default D;