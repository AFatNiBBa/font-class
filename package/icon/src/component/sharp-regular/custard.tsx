
import { Icon } from "../../index";

/**
 * A component that renders the `custard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/custard?s=sharp-regular custard}
 * @preview ![custard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/custard.svg)
 */
const Custard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M134.6 239.1L103.1 368l-49.4 0L128 64l320 0 74.3 304-49.4 0L441.4 239.1 385 225l-89.4 29.8-7.6 2.5-7.6-2.5L191 225l-56.4 14.1zm12.9-52.7l38.7-9.7L193 175l6.6 2.2L288 206.7l88.4-29.5L383 175l6.8 1.7 38.7 9.7L410.3 112l-244.6 0-18.2 74.4zM0 400l24 0 528 0 24 0 0 48-24 0L24 448 0 448l0-48z" />
    </Icon>
);

export default Custard;