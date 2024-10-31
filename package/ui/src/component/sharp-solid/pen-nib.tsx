
import { Icon } from "../../index";

/**
 * A component that renders the `pen-nib` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=sharp-solid pen-nib}
 * @preview ![pen-nib](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-nib.svg)
 */
const PenNib: typeof Icon = x => (
    <Icon {...x}>
        <path d="M43.3 491.3L64 512l288-96 64-192 .7-.7-128-128L288 96 96 160 0 448l20.7 20.7 144-144c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7l-144 144zm268-418.6l128 128L512 128 384 0 311.3 72.7z" />
    </Icon>
);

export default PenNib;