
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=sharp-solid octagon}
 * @preview ![octagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/octagon.svg)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 352V160L160 0H352L512 160V352L352 512H160L0 352z" />
    </Icon>
);

export default Octagon;