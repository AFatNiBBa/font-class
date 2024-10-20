
import { Icon } from "../../index";

/**
 * A component that renders the `couch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=sharp-regular couch}
 * @preview ![couch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/couch.svg)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528 80L112 80l0 112-48 0L64 80l0-48 48 0 416 0 48 0 0 48 0 112-48 0 0-112zM48 272l0 160 48 0 0-160-48 0zM0 224l48 0 48 0 48 0 0 48 0 16 352 0 0-16 0-48 48 0 48 0 48 0 0 48 0 160 0 48-48 0-48 0-48 0 0-32-352 0 0 32-48 0-48 0L0 480l0-48L0 272l0-48zM144 400l352 0 0-64-352 0 0 64zM592 272l-48 0 0 160 48 0 0-160z" />
    </Icon>
);

export default Couch;