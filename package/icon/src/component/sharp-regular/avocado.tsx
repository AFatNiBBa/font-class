
import { Icon } from "../../index";

/**
 * A component that renders the `avocado` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=sharp-regular avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path d="M382 265.7l53.9-53.9c37.5-37.5 37.5-98.3 0-135.8s-98.3-37.5-135.8 0L246.2 130l-14.5 14.5-20.5-.4c-42.1-.9-84.4 14.7-116.5 46.8c-62.5 62.5-62.5 163.8 0 226.3s163.8 62.5 226.3 0c32.1-32.1 47.7-74.3 46.8-116.5l-.4-20.5L382 265.7zm87.8-19.9L416 299.7c1.1 54.7-19.2 109.7-60.9 151.4c-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c41.7-41.7 96.7-62 151.4-60.9l53.9-53.9c56.2-56.2 147.4-56.2 203.6 0s56.2 147.4 0 203.6zM283.2 347.2c-41.7 41.7-102.1 49.1-134.8 16.4s-25.3-93 16.4-134.8s102.1-49.1 134.8-16.4s25.3 93-16.4 134.8z" />
    </Icon>
);

export default Avocado;