
import { Icon } from "../../index";

/**
 * A component that renders the `vial` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=sharp-regular vial}
 * @preview ![vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/vial.svg)
 */
const Vial: typeof Icon = x => (
    <Icon {...x}>
        <path d="M340.2 18.2l-17-17L289.3 35.2l17 17 3.8 3.8L30.2 335.8C10.9 355.2 0 381.4 0 408.8C0 465.8 46.2 512 103.2 512c27.4 0 53.6-10.9 73-30.2L456 201.9l3.8 3.8 17 17 33.9-33.9-17-17L473 151 361 39 340.2 18.2zM177.9 256L344 89.9 422.1 168l-88 88-156.1 0z" />
    </Icon>
);

export default Vial;