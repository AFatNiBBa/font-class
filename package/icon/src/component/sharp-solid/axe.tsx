
import { Icon } from "../../index";

/**
 * A component that renders the `axe` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=sharp-solid axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 512L313.4 262.6l-64-64L0 448l64 64zM400 48L352 0 224 128 384 288l0 96 0 32 32 0c123.7 0 224-100.3 224-224l0-32-32 0-96 0-48-48 48-48L448 0 400 48zm48 300.8l0-32.8c45-11.6 80.4-47 92-92l32.8 0C560.1 286.7 510.7 336.1 448 348.8z" />
    </Icon>
);

export default Axe;