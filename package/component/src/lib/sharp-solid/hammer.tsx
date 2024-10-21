
import { Icon } from "../../index";

/**
 * A component that renders the `hammer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=sharp-solid hammer}
 * @preview ![hammer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hammer.svg)
 */
const Hammer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z" />
    </Icon>
);

export default Hammer;