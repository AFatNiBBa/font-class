
import { Icon } from "../../index";

/**
 * A component that renders the `outdent` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outdent?s=sharp-regular outdent}
 * @preview ![outdent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/outdent.svg)
 */
const Outdent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 40l24 0 400 0 24 0 0 48-24 0L24 88 0 88 0 40zM192 168l24 0 208 0 24 0 0 48-24 0-208 0-24 0 0-48zm24 128l208 0 24 0 0 48-24 0-208 0-24 0 0-48 24 0zM0 424l24 0 400 0 24 0 0 48-24 0L24 472 0 472l0-48zm128-72L0 256l128-96 0 192z" />
    </Icon>
);

export default Outdent;