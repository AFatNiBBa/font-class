
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarters` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarters?s=sharp-solid circle-quarters}
 * @preview ![circle-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-quarters.svg)
 */
const CircleQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M120.2 391.8L256 256 391.8 391.8C426.5 357 448 309 448 256s-21.5-101-56.2-135.8L256 256 120.2 120.2C85.5 155 64 203 64 256s21.5 101 56.2 135.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarters;