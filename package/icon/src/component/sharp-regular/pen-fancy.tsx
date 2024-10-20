
import { Icon } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=sharp-regular pen-fancy}
 * @preview ![pen-fancy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pen-fancy.svg)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 272l120-48L366.7 34.6 400 0l33.9 33.9 44.1 44.1L512 112l-34.6 33.3L288 328 240 448 32 512 0 480 64 272zm158.8-19.1l36.3 36.3L443.5 111.4 400.6 68.5 222.8 252.9zm-43.3 24.6L103.1 308 68.4 421 112 377.3c0-.4 0-.9 0-1.3c0-13.3 10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24c-.4 0-.9 0-1.3 0L91 443.6l113-34.8 30.6-76.4-55-55z" />
    </Icon>
);

export default PenFancy;