
import { Icon } from "../../index";

/**
 * A component that renders the `hat-wizard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-wizard?s=sharp-light hat-wizard}
 * @preview ![hat-wizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hat-wizard.svg)
 */
const HatWizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M421.8 40.9L384 192l62.9 176-34 0-59-165.2-3.3-9.1 2.3-9.4L384.1 59.7 200.6 151.5 104.4 368l-35 0L176 128 394.3 18.8 432 0 421.8 40.9zM480 480l0-48L32 432l0 48 448 0zM32 400l448 0 32 0 0 32 0 48 0 32-32 0L32 512 0 512l0-32 0-48 0-32 32 0zM288 176l0 16 16 0 16 0 0 32-16 0-16 0 0 16 0 16-32 0 0-16 0-16-16 0-16 0 0-32 16 0 16 0 0-16 0-16 32 0 0 16zM240 304l0 32 32 0 16 0 0 32-16 0-32 0-32 0-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0 0 16z" />
    </Icon>
);

export default HatWizard;