
import { Icon } from "../../index";

/**
 * A component that renders the `fax` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=sharp-regular fax}
 * @preview ![fax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/fax.svg)
 */
const Fax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 0L128 0l0 24 0 104-80 0L0 128l0 48L0 464l0 48 48 0 48 0 32 0 48 0 312 0 24 0 0-24 0-272 0-24-24 0-312 0 0-16 0-48 0-80 214.1 0L432 89.9l0 70.1 48 0 0-80 0-9.9-7-7L417 7l-7-7L400 0 152 0zm24 240l288 0 0 224-288 0 0-224zM128 464l-32 0-48 0 0-288 80 0 0 40 0 24 0 224zM304 272l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zm160-96l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default Fax;