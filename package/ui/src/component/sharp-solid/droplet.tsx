
import { Icon } from "../../index";

/**
 * A component that renders the `droplet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=sharp-solid droplet}
 * @preview ![droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/droplet.svg)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512c106 0 192-86 192-192S192 0 192 0S0 214 0 320S86 512 192 512zM96 336c0 44.2 35.8 80 80 80l16 0 0 32-16 0c-61.9 0-112-50.1-112-112l0-16 32 0 0 16z" />
    </Icon>
);

export default Droplet;