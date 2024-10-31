
import { Icon } from "../../index";

/**
 * A component that renders the `spoon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=thin spoon}
 * @preview ![spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/spoon.svg)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M263.4 216.6l32 32c15.6 15.6 36 23.4 56.4 23.4c33.8 0 69.7-20.5 97.8-54.2c28-33.5 46.3-78 46.3-121.8c0-44.2-35.8-80-80-80c-43.7 0-88.2 18.3-121.8 46.3C260.5 90.5 240 126.4 240 160.2c0 20.4 7.8 40.8 23.4 56.4zm-11.3 11.3c-18.7-18.7-28.1-43.2-28.1-67.7C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-24.5 0-49-9.4-67.7-28.1l-10.3-10.3L13.7 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L262.5 238.2l-10.3-10.3z" />
    </Icon>
);

export default Spoon;