
import { Icon } from "../../index";

/**
 * A component that renders the `train` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=sharp-regular train}
 * @preview ![train](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/train.svg)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 48l0 144 352 0 0-144L48 48zm0 192l0 160 352 0 0-160L48 240zM0 0L48 0 400 0l48 0 0 48 0 352 0 48-48 0-14.1 0 47 47 17 17-67.9 0-64-64-188.1 0-64 64-67.9 0 17-17 47-47L48 448 0 448l0-48L0 48 0 0zM184 320a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" />
    </Icon>
);

export default Train;