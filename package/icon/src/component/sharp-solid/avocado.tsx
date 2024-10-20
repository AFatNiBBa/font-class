
import { Icon } from "../../index";

/**
 * A component that renders the `avocado` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=sharp-solid avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path d="M469.8 245.8c56.2-56.2 56.2-147.4 0-203.6s-147.4-56.2-203.6 0L212.3 96c-54.7-1.1-109.7 19.2-151.4 60.9c-81.2 81.2-81.2 212.9 0 294.2s212.9 81.2 294.2 0c41.7-41.7 62-96.7 60.9-151.4l53.9-53.9zM283.2 347.2c-41.7 41.7-102.1 49.1-134.8 16.4s-25.3-93 16.4-134.8s102.1-49.1 134.8-16.4s25.3 93-16.4 134.8z" />
    </Icon>
);

export default Avocado;