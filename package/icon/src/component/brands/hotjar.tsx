
import { Icon } from "../../index";

/**
 * A component that renders the `hotjar` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotjar?s=brands hotjar}
 * @preview ![hotjar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/hotjar.svg)
 */
const Hotjar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M361.5 0c0 131.6-80.7 176.8-140.2 209.4c-.6 .3-1.1 .6-1.6 .9c-53.8 30.2-88.7 49.8-89.6 122H32C32 200.8 112.7 155.6 172.2 123C227 93.2 262.5 73 262.5 0h98.9zM301 302.6c54.8-29.8 90.3-50 90.3-123h98c0 131.6-80.7 176.7-140.2 209.4c-54.8 29.8-90.3 50-90.3 123h-98c0-131.6 80.7-176.8 140.2-209.4z" />
    </Icon>
);

export default Hotjar;