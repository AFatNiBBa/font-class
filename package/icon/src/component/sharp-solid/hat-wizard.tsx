
import { Icon } from "../../index";

/**
 * A component that renders the `hat-wizard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-wizard?s=sharp-solid hat-wizard}
 * @preview ![hat-wizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hat-wizard.svg)
 */
const HatWizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 416L192 128 416 0 352 192l96 224-217.1 0L248 376l56-24-56-24-24-56-24 56-56 24 56 24 17.1 40L64 416zM256 192l16 32 16-32 32-16-32-16-16-32-16 32-32 16 32 16zM32 448l448 0 32 0 0 64-32 0L32 512 0 512l0-64 32 0z" />
    </Icon>
);

export default HatWizard;