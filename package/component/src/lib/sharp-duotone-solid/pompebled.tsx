
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pompebled` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pompebled?s=sharp-duotone-solid pompebled}
 * @preview ![pompebled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pompebled.svg)
 */
const Pompebled: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M295.2 216.3c48.2-58.4 118.9-77.5 165.1-44.3c59 41.8 68.8 131.8 22.6 200.2c-85.5 126.3-260.4 185.6-381.8 98.6C-20.8 383.8-28.6 196.7 56.9 70.4c46.2-68.9 131.7-91 190.7-49.3c46.7 32.2 54.5 106.6 17.7 173.5L254.7 210l30 21.6 10.6-15.3z" />
    </Icon>
);

export default Pompebled;