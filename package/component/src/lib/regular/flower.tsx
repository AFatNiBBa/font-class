
import { Icon } from "../../index";

/**
 * A component that renders the `flower` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower?s=regular flower}
 * @preview ![flower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flower.svg)
 */
const Flower: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 168c0 33.6-12.2 64.3-32.3 88c20.1 23.7 32.3 54.4 32.3 88c0 75.1-60.9 136-136 136c-33.6 0-64.3-12.2-88-32.3c-23.7 20.1-54.4 32.3-88 32.3C60.9 480 0 419.1 0 344c0-33.6 12.2-64.3 32.3-88C12.2 232.3 0 201.6 0 168C0 92.9 60.9 32 136 32c33.6 0 64.3 12.2 88 32.3C247.7 44.2 278.4 32 312 32c75.1 0 136 60.9 136 136zM192.9 100.9C177.6 87.8 157.8 80 136 80c-48.6 0-88 39.4-88 88c0 21.8 7.8 41.6 20.9 56.9c15.2 17.9 15.2 44.2 0 62.2C55.8 302.4 48 322.2 48 344c0 48.6 39.4 88 88 88c21.8 0 41.6-7.8 56.9-20.9c17.9-15.2 44.2-15.2 62.2 0C270.4 424.2 290.2 432 312 432c48.6 0 88-39.4 88-88c0-21.8-7.8-41.6-20.9-56.9c-15.2-17.9-15.2-44.2 0-62.2C392.2 209.6 400 189.8 400 168c0-48.6-39.4-88-88-88c-21.8 0-41.6 7.8-56.9 20.9c-17.9 15.2-44.2 15.2-62.2 0zM256 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default Flower;