
import { Icon } from "../../index";

/**
 * A component that renders the `sort` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=sharp-regular sort}
 * @preview ![sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sort.svg)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 224l48 0 224 0 48 0 0-48L160 32 0 176l0 48zM160 96.6L248.2 176 71.8 176 160 96.6zM0 288l0 48L160 480 320 336l0-48-48 0L48 288 0 288zM160 415.4L71.8 336l176.5 0L160 415.4z" />
    </Icon>
);

export default Sort;