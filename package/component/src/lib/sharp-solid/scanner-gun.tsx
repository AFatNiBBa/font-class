
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-gun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-gun?s=sharp-solid scanner-gun}
 * @preview ![scanner-gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scanner-gun.svg)
 */
const ScannerGun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L416 32l0 64 160 0 0-64zM261.4 256l90.6 0 0-224L112 32C50.1 32 0 82.1 0 144c0 50.9 33.9 93.8 80.3 107.5L0 392l136 80L261.4 256zM416 192l0 64 160 0 0-64-160 0zM576 416l-160 0 0 64 160 0 0-64zM416 128l0 32 160 0 0-32-160 0zM576 288l-160 0 0 32 160 0 0-32zM416 352l0 32 160 0 0-32-160 0z" />
    </Icon>
);

export default ScannerGun;