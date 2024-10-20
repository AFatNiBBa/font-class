
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=sharp-thin reflect-vertical}
 * @preview ![reflect-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/reflect-vertical.svg)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 248l8 0 496 0 8 0 0 16-8 0L8 264l-8 0 0-16zm244.7 83.3L256 320l11.3 11.3L416 480l0 16 0 16-16 0-288 0-16 0 0-16 0-16L244.7 331.3zM112 486.6l0 9.4 288 0 0-9.4-144-144-144 144zM256 192l-11.3-11.3L96 32l0-16L96 0l16 0L400 0l16 0 0 16 0 16L267.3 180.7 256 192zM112 16l0 9.4 144 144 144-144 0-9.4L112 16z" />
    </Icon>
);

export default ReflectVertical;