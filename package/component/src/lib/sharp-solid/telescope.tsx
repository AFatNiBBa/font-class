
import { Icon } from "../../index";

/**
 * A component that renders the `telescope` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/telescope?s=sharp-solid telescope}
 * @preview ![telescope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/telescope.svg)
 */
const Telescope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M476 277.7l97-56L445 0 348 56 476 277.7zM336.3 99.7c-1-1.8-2-3.6-2.8-5.4L36.7 284.9l19.2 33.3L0 350.5l49.9 86.4 55.9-32.3 16.3 28.2 115.7-62.1L180.3 512l51.8 0L304 335.6 375.9 512l51.8 0L346.4 312.5l86.1-46.2-.2-.3-96-166.3z" />
    </Icon>
);

export default Telescope;