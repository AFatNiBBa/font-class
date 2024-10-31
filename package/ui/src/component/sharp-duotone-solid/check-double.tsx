
import { Icon, generic } from "../../index";

/**
 * A component that renders the `check-double` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=sharp-duotone-solid check-double}
 * @preview ![check-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/check-double.svg)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M34.7 144l22.6 22.6 80 80L160 269.3l22.6-22.6 160-160L365.3 64 320 18.7 297.4 41.4 160 178.7l-57.4-57.4L80 98.7 34.7 144z" />
        <path d="M447.9 206.5l-23.2 22L181 459.3l-22 20.8-22-20.8L23.2 351.6 0 329.6l44-46.5 23.2 22L159 392 380.7 182l23.2-22 44 46.5z" />
    </Icon>
);

export default CheckDouble;