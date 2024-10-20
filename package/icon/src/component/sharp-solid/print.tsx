
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=sharp-solid print}
 * @preview ![print](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/print.svg)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 0L368 0l13.3 0 9.4 9.4 48 48 9.4 9.4L448 80l0 80-64 0 0-66.7L354.7 64 128 64l0 96-64 0L64 32 64 0 96 0zM64 384L0 384 0 192l512 0 0 192-64 0 0 96 0 32-32 0L96 512l-32 0 0-32 0-96zm64 0l0 64 256 0 0-64 0-32-256 0 0 16 0 16zM408 248l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default Print;