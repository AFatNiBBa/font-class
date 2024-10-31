
import { Icon } from "../../index";

/**
 * A component that renders the `hamsa` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=sharp-solid hamsa}
 * @preview ![hamsa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hamsa.svg)
 */
const Hamsa: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 288l96 0L96 32l80 0 0 192 40 0L216 0l80 0 0 224 40 0 0-192 80 0 0 256 96 0 0 48L416.6 441c-41.1 45.2-99.4 71-160.6 71s-119.4-25.8-160.6-71L0 336l0-48zm256 0c-48 0-96 64-96 64s48 64 96 64s96-64 96-64s-48-64-96-64zm0 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hamsa;