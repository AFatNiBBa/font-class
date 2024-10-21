
import { Icon } from "../../index";

/**
 * A component that renders the `lemon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lemon?s=sharp-solid lemon}
 * @preview ![lemon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lemon.svg)
 */
const Lemon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 80L400 32 327.7 56.1C244 16.3 146.2 46.2 80.2 112.2s-96 163.7-56.1 247.4L0 432l48 48 72.3-24.1c83.7 39.8 181.4 9.9 247.4-56.1s96-163.7 56.1-247.4L448 80zM212.5 127.4c-54.6 16-101.1 62.5-117.1 117.1l-4.5 15.4-30.7-9 4.5-15.4c19.1-65.1 73.7-119.8 138.9-138.9l15.4-4.5 9 30.7-15.4 4.5z" />
    </Icon>
);

export default Lemon;