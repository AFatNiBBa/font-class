
import { Icon } from "../../index";

/**
 * A component that renders the `broom` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom?s=sharp-solid broom}
 * @preview ![broom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/broom.svg)
 */
const Broom: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 288l-40-40L576 48 528 0 328 200l-40-40-32 0 0 51.7L364.3 320l51.7 0 0-32zm-74.9 65.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3C79.4 304.6 64 341.8 64 380.5l0 3.5 96-48L0 480l0 32 195.5 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" />
    </Icon>
);

export default Broom;