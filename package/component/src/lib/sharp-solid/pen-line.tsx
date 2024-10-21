
import { Icon } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=sharp-solid pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 352L0 512l160-32L420.7 219.3l-128-128L32 352zM512 128L384 0 315.3 68.7l128 128L512 128zM248 464l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0z" />
    </Icon>
);

export default PenLine;