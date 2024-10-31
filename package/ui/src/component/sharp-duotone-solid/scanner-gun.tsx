
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-gun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-gun?s=sharp-duotone-solid scanner-gun}
 * @preview ![scanner-gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scanner-gun.svg)
 */
const ScannerGun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 144c0 50.9 33.9 93.8 80.3 107.5L0 392l136 80L261.4 256l90.6 0 0-224L112 32C50.1 32 0 82.1 0 144z" />
        <path d="M416 32h160v64H416V32zm0 160h160v64H416v-64zm0 224h160v64H416v-64zm0-288h160v32H416v-32zm0 160h160v32H416v-32zm0 64h160v32H416v-32z" />
    </Icon>
);

export default ScannerGun;