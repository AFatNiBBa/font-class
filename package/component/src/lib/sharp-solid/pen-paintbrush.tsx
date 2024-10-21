
import { Icon } from "../../index";

/**
 * A component that renders the `pen-paintbrush` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-paintbrush?s=sharp-solid pen-paintbrush}
 * @preview ![pen-paintbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-paintbrush.svg)
 */
const PenPaintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M118.8 39.6L79.2 0 0 79.2l39.6 39.6L146.3 225.5l79.2-79.2L118.8 39.6zM399.2 511.2l176 0 0-64-64 0 0-48c0-53.6-37.7-98.5-88.1-109.4L289.8 423.1c11 50.4 55.8 88.1 109.4 88.1zM64 352L32 512l160-32L452.7 219.3l-128-128L64 352zM544 128L416 0 347.3 68.7l128 128L544 128z" />
    </Icon>
);

export default PenPaintbrush;