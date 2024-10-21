
import { Icon } from "../../index";

/**
 * A component that renders the `ruler` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler?s=sharp-solid ruler}
 * @preview ![ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ruler.svg)
 */
const Ruler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 512L512 160 352 0 283.3 68.7l48 48L342.6 128 320 150.6l-11.3-11.3-48-48-41.4 41.4 48 48L278.6 192 256 214.6l-11.3-11.3-48-48-41.4 41.4 48 48L214.6 256 192 278.6l-11.3-11.3-48-48L91.3 260.7l48 48L150.6 320 128 342.6l-11.3-11.3-48-48L0 352 160 512z" />
    </Icon>
);

export default Ruler;