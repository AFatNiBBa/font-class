
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=sharp-solid reflect-vertical}
 * @preview ![reflect-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/reflect-vertical.svg)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 232l0 48 24 0 464 0 24 0 0-48-24 0L24 232 0 232zM416 480L256 320 96 480l0 32 320 0 0-32zM256 192L416 32l0-32L96 0l0 32L256 192z" />
    </Icon>
);

export default ReflectVertical;