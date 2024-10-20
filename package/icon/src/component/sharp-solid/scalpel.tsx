
import { Icon } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=sharp-solid scalpel}
 * @preview ![scalpel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scalpel.svg)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 288L495.7 115.6C506.2 102.9 512 87 512 70.5l0-4.2C512 29.7 482.3 0 445.8 0c-18.9 0-36.9 8.1-49.5 22.2L160 288l192 0zM176 320L0 512s288-16 288-192l-112 0z" />
    </Icon>
);

export default Scalpel;